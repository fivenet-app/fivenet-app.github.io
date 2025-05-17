---
title: Templates
---

Templates can be used to make creating documents easier.

::callout{icon="i-mdi-info-slab-circle"}
Golang HTML templating is used.
In addition to the base [Golang html/template functions](https://pkg.go.dev/html/template), the [`sprig` template functions](https://masterminds.github.io/sprig/) are available for convenience.
::

Points to watch out when creating a template:

- The whole template needs to be wrapped in `<p>` and `</p>`.
- Use `<br>` for new lines.

::callout{icon="i-mdi-warning-circle" color="warning"}
A template must render out to valid HTML, otherwise it might not work/render as expected.
::

## Available Variables

- `.Documents` - List of documents that are in the user's clipboard.
  - `.Id`
  - `.CreatedAt`
  - `.Title`
  - `.State`
  - `.CreatorId`
  - `.Creator` - See [User Info Structure](#user-info-structure).
  - `.Closed` - Boolean.
  - `.CategoryId`
  - `.Category`- `.Name`
    - `.Description`
- `.Users` - List of citizens/users that are in the user's clipboard.
  - See [User Info Structure](#user-info-structure).
- `.Vehicles` - List of vehicles that are in the user's clipboard.
  - `Plate`
  - `Model`
  - `Type`
  - `Owner` - See [User Info Structure](#user-info-structure).
- `.ActiveChar` - Author/Submitting user's info.
  - See [User Info Structure](#user-info-structure).

### User Info Structure

- `.UserId`
- `.Identifier`
- `.Job` - Preferably use `jobLabel`.
- `.JobLabel`*
- `.JobGrade` - Preferably use `jobGradeLabel`.
- `.JobGradeLabel`*
- `.Firstname`
- `.Lastname`
- `.Dateofbirth` - In `DD.MM.YYYY` format.
- `.PhoneNumber` - Optional, might not always be included.

(*these fields are only available on the `.activeChar` variable)

## Snippets

### Access Creator Info

```templ
{{ .ActiveChar.Firstname }}, {{ .ActiveChar.Lastname }}
```

### Get First Citizen

Get the first user in the list (first in the user's clipboard):

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

## Examples

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
