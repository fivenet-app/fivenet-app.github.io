---
title: Templates
---

Templates make document creation faster and more consistent.
In FiveNet, templates use **HTML** plus **Golang templating** to insert dynamic data.

::callout{icon="i-mdi-info-slab-circle"}
FiveNet supports:
- Base [Golang `html/template` functions](https://pkg.go.dev/html/template)
- Additional [`sprout` template functions](https://docs.atom.codes/sprout/registries/list-of-all-registries)
    - Note: some `sprout` functions are unavailable in FiveNet templates, such as `filesystem`, `network`, and `regex`; this is not a complete list.
::

## How Rendering Works

When a template is used, FiveNet:
1. Takes your HTML content.
2. Replaces template expressions like `{{ .ActiveChar.GetFirstname }}` with real values.
3. Renders the final result as HTML in the document editor.

Clipboard selections provide data for:
- `.Users`
- `.Vehicles`
- `.Documents`

## Minimum Working Template

Use this as a safe starting point:

```templ
<p>
Created by: {{ .ActiveChar.GetFirstname }} {{ .ActiveChar.GetLastname }}<br>
Date: {{ now | date "02.01.2006" }}
</p>
```

::callout{icon="i-mdi-warning-circle" color="warning"}
A template must render to valid HTML, otherwise output may fail or render incorrectly.
::

## Core Building Blocks

### Variables

```templ
{{ .ActiveChar.GetFirstname }}
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
<li>{{ .GetPlate }} - {{ .Owner.GetFirstname }} {{ .Owner.GetLastname }}</li>
{{- end -}}
</ul>
```

### Common Helpers

::tip
The `$citizen` variable is automatically populated with the first selected citizen. You do not need to assign `{{- $citizen := first .Users -}}` yourself.
::

```templ
{{ now | date "02.01.2006 15:04" }}
```

## Copy-Ready Snippets

### First Selected Citizen

```templ
{{- if .Users -}}
<p>
Citizen: {{ $citizen.GetFirstname }} {{ $citizen.GetLastname }}<br>
DOB: {{ $citizen.GetDateofbirth }}
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
<li>{{ .GetPlate }} - {{ .Owner.GetFirstname }} {{ .Owner.GetLastname }}</li>
{{- end -}}
</ul>
{{ end }}
```

### Signature Block

```templ
<p>
Submitted by: {{ .ActiveChar.GetFirstname }} {{ .ActiveChar.GetLastname }}<br>
Rank: {{ .ActiveChar.GetJobGradeLabel }}<br>
Date: {{ now | date "02.01.2006 15:04" }}
</p>
```

## Common Mistakes

- Invalid HTML output (missing/incorrect tags).
- Using `.activeChar` instead of `.ActiveChar`.
- Accessing list items without checking if the list has data.
- Forgetting `<br>` for line breaks in paragraphs.

## Available Variables

::callout{color="info" icon="i-mdi-information-outline"}
The values available in templates are so-called protobuf objects. Access their fields with the generated `Get...` methods. For example, write `{{ .ActiveChar.GetFirstname }}` instead of `{{ .ActiveChar.Firstname }}`. These getters return an empty or zero value when a value is missing. For optional nested objects, `with` can be used when you need to render fallback content.
::

### `.Documents`

List of documents in the user's clipboard.

- `.GetId`
- `.GetCreatedAt`
- `.GetTitle`
- `.GetState`
- `.GetCreatorId`
- `.GetCreator` - See [User Info Structure](#user-info-structure).
- `.GetMeta.GetClosed` - Boolean.
- `.GetCategoryId`
- `.GetCategory`
  - `.GetName`
  - `.GetDescription`

### `.Users`

List of citizens/users in the user's clipboard.

- See [User Info Structure](#user-info-structure).

### `.Vehicles`

List of vehicles in the user's clipboard.

- `.GetPlate`
- `.GetModel`
- `.GetType`
- `.GetOwner` - See [User Info Structure](#user-info-structure).

### `.ActiveChar`

Author/submitting user information.

- See [User Info Structure](#user-info-structure).

### User Info Structure

- `.GetUserId`
- `.GetIdentifier`
- `.GetJob` - Preferably use `.GetJobLabel`.
- `.GetJobLabel`*
- `.GetJobGrade` - Preferably use `.GetJobGradeLabel`.
- `.GetJobGradeLabel`*
- `.GetFirstname`
- `.GetLastname`
- `.GetDateofbirth` - In `DD.MM.YYYY` format.
- `.GetPhoneNumber` - Optional, might not always be included.

(*These fields are only available on the `.ActiveChar` variable.)

## Additional Snippets

### Access Active User Info

```templ
{{ .ActiveChar.GetFirstname }}, {{ .ActiveChar.GetLastname }}
```

### Get First Citizen

The `$citizen` variable automatically contains the first user in the list (first item in the user's clipboard).

Example to access citizen info:

```templ
{{ $citizen.GetFirstname }}, {{ $citizen.GetLastname }} ({{ $citizen.GetDateofbirth }})
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
{{ .GetCreatedAt | date "02.01.2006 15:04" }}
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
<li>{{ .GetPlate }} - {{ .Owner.GetFirstname }}, {{ .Owner.GetLastname }}</li>
{{- end -}}
</ul>
{{ end }}
```
