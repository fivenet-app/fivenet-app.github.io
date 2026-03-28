---
title: Templates
---

Templates make document creation faster and more consistent.
In FiveNet, templates use **HTML** plus **Golang templating** to insert dynamic data.

::callout{icon="i-mdi-info-slab-circle"}
FiveNet supports:
- Base [Golang `html/template` functions](https://pkg.go.dev/html/template)
- Additional [`sprig` template functions](https://masterminds.github.io/sprig/)
::

## How Rendering Works

When a template is used, FiveNet:
1. Takes your HTML content.
2. Replaces template expressions like `{{ .ActiveChar.Firstname }}` with real values.
3. Renders the final result as HTML in the document editor.

Clipboard selections provide data for:
- `.Users`
- `.Vehicles`
- `.Documents`

## Minimum Working Template

Use this as a safe starting point:

```templ
<p>
Created by: {{ .ActiveChar.Firstname }} {{ .ActiveChar.Lastname }}<br>
Date: {{ now | date "02.01.2006" }}
</p>
```

::callout{icon="i-mdi-warning-circle" color="warning"}
A template must render to valid HTML, otherwise output may fail or render incorrectly.
::

## Core Building Blocks

### Variables

```templ
{{ .ActiveChar.Firstname }}
```

### Conditionals

```templ
{{ if .Users }}
<p>Users selected.</p>
{{ else }}
<p>No users selected.</p>
{{ end }}
```

### Loops

```templ
<ul>
{{- range .Vehicles -}}
<li>{{ .Plate }} - {{ .Owner.Firstname }} {{ .Owner.Lastname }}</li>
{{- end -}}
</ul>
```

### Common Helpers

```templ
{{- $citizen := first .Users -}}
{{ now | date "02.01.2006 15:04" }}
```

## Copy-Ready Snippets

### First Selected Citizen

```templ
{{- if .Users -}}
{{- $citizen := first .Users -}}
<p>
Citizen: {{ $citizen.Firstname }} {{ $citizen.Lastname }}<br>
DOB: {{ $citizen.Dateofbirth }}
</p>
{{- else -}}
<p>No citizen selected.</p>
{{- end -}}
```

### Vehicle List With Fallback

```templ
{{ if not .Vehicles }}
<p>No vehicles involved.</p>
{{ else }}
<ul>
{{- range .Vehicles -}}
<li>{{ .Plate }} - {{ .Owner.Firstname }} {{ .Owner.Lastname }}</li>
{{- end -}}
</ul>
{{ end }}
```

### Signature Block

```templ
<p>
Submitted by: {{ .ActiveChar.Firstname }} {{ .ActiveChar.Lastname }}<br>
Rank: {{ .ActiveChar.JobGradeLabel }}<br>
Date: {{ now | date "02.01.2006 15:04" }}
</p>
```

## Common Mistakes

- Invalid HTML output (missing/incorrect tags).
- Using `.activeChar` instead of `.ActiveChar`.
- Accessing list items without checking if the list has data.
- Forgetting `<br>` for line breaks in paragraphs.

## Available Variables

### `.Documents`

List of documents in the user's clipboard.

- `.Id`
- `.CreatedAt`
- `.Title`
- `.State`
- `.CreatorId`
- `.Creator` - See [User Info Structure](#user-info-structure).
- `.Closed` - Boolean.
- `.CategoryId`
- `.Category`
  - `.Name`
  - `.Description`

### `.Users`

List of citizens/users in the user's clipboard.

- See [User Info Structure](#user-info-structure).

### `.Vehicles`

List of vehicles in the user's clipboard.

- `.Plate`
- `.Model`
- `.Type`
- `.Owner` - See [User Info Structure](#user-info-structure).

### `.ActiveChar`

Author/submitting user information.

- See [User Info Structure](#user-info-structure).

### User Info Structure

- `.UserId`
- `.Identifier`
- `.Job` - Preferably use `.JobLabel`.
- `.JobLabel`*
- `.JobGrade` - Preferably use `.JobGradeLabel`.
- `.JobGradeLabel`*
- `.Firstname`
- `.Lastname`
- `.Dateofbirth` - In `DD.MM.YYYY` format.
- `.PhoneNumber` - Optional, might not always be included.

(*These fields are only available on the `.ActiveChar` variable.)

## Additional Snippets

### Access Active User Info

```templ
{{ .ActiveChar.Firstname }}, {{ .ActiveChar.Lastname }}
```

### Get First Citizen

Get the first user in the list (first item in the user's clipboard):

```templ
{{- $citizen := first .Users -}}
```

Example to access citizen info:

```templ
{{ $citizen.Firstname }}, {{ $citizen.Lastname }} ({{ $citizen.Dateofbirth }})
```

### Current Date and Time

```templ
{{ now | date "02.01.2006 15:04" }}
```

To learn more about different date and time formats, check out [the Golang `time` package documentation here](https://pkg.go.dev/time#pkg-constants).

### Current Date

```templ
{{ now | date "02.01.2006" }}
```

To learn more about different date and time formats, check out [the Golang `time` package documentation here](https://pkg.go.dev/time#pkg-constants).

### Showing a Timestamp (e.g., `CreatedAt` field)

```templ
{{ .CreatedAt | date "02.01.2006 15:04" }}
```

### Checkboxes

#### Inline-Checkbox

```html
<span data-checked="false" data-type="checkboxStandalone"><label><input type="checkbox"> </label></span>
```

Example usage:

```html
<p>Checkbox inline <span data-checked="false" data-type="checkboxStandalone"><label><input type="checkbox"> </label></span>with text</p>
```

#### Task List (Checkboxes List)

```html
<ul data-type="taskList">
    <li data-checked="false" data-type="taskItem">
        <label><input type="checkbox"><span></span></label><div><p>Your first text goes here</p></div>
        <label><input type="checkbox"><span></span></label><div><p>Your second text goes here</p></div>
    </li>
</ul>
```

##### Checkbox List Item

```html
<label><input type="checkbox"><span></span></label><div><p>Your text goes here</p></div>
```

### Displaying a List of Vehicles

```templ
{{ if not .Vehicles }}
<p>
No Vehicles involved.
</p>
{{ else }}
<ul>
{{- range .Vehicles -}}
<li>{{ .Plate }} - {{ .Owner.Firstname }}, {{ .Owner.Lastname }}</li>
{{- end -}}
</ul>
{{ end }}
```
