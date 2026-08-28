interface GitHubRelease {
    tag_name: string;
    name: string | null;
    body: string | null;
    html_url: string;
    published_at: string | null;
    draft: boolean;
    prerelease: boolean;
}

export interface ChangelogRelease {
    title: string;
    body: string;
    date: string;
    url: string;
    prerelease: boolean;
}

const releasesUrl = 'https://api.github.com/repos/fivenet-app/fivenet/releases?per_page=45';

function normalizeReleaseBody(body: string, tag: string, date: string): string {
    const version = tag.replace(/^v/, '').replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const publishedDate = date.slice(0, 10);
    const lines = body.split(/\r?\n/);
    let index = 0;

    while (!lines[index]?.trim()) index++;
    if (lines[index]?.trim().toLowerCase() === '# changelog') index++;
    while (!lines[index]?.trim()) index++;

    if (lines[index]?.trim() !== 'All notable changes to this project will be documented in this file.') {
        return body.trim();
    }

    index++;
    while (!lines[index]?.trim()) index++;

    const releaseHeading = new RegExp(`^##\\s+\\[?${version}\\]?\\s+-\\s+${publishedDate}\\s*$`, 'i');
    if (!releaseHeading.test(lines[index]?.trim() ?? '')) {
        return body.trim();
    }

    return lines
        .slice(index + 1)
        .join('\n')
        .trim();
}

export default defineEventHandler(async (): Promise<ChangelogRelease[]> => {
    const config = useRuntimeConfig();
    const headers: Record<string, string> = {
        Accept: 'application/vnd.github+json',
        'User-Agent': 'fivenet-app.github.io',
        'X-GitHub-Api-Version': '2022-11-28',
    };

    if (config.githubToken) {
        headers.Authorization = `Bearer ${config.githubToken}`;
    }

    const releases = await $fetch<GitHubRelease[]>(releasesUrl, { headers });

    if (!Array.isArray(releases)) {
        throw createError({ statusCode: 502, statusMessage: 'GitHub returned an invalid releases response' });
    }

    const publishedReleases = releases.filter((release) => !release.draft);
    if (publishedReleases.length === 0) {
        throw createError({ statusCode: 502, statusMessage: 'GitHub returned no published releases' });
    }

    return publishedReleases.map((release) => {
        if (!release.tag_name || !release.html_url || !release.published_at || typeof release.body !== 'string') {
            throw createError({ statusCode: 502, statusMessage: 'GitHub returned an invalid release' });
        }

        return {
            title: release.tag_name,
            body: normalizeReleaseBody(release.body, release.tag_name, release.published_at),
            date: release.published_at,
            url: release.html_url,
            prerelease: release.prerelease,
        };
    });
});
