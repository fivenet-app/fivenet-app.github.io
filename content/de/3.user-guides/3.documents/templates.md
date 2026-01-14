---
title: Vorlagen
---

Vorlagen können verwendet werden, um das Erstellen von Dokumenten zu erleichtern.

::callout{icon="i-mdi-info-slab-circle"}
Golang HTML-Templating wird verwendet.
Zusätzlich zu den grundlegenden [Golang html/template-Funktionen](https://pkg.go.dev/html/template) sind die [`sprig`-Template-Funktionen](https://masterminds.github.io/sprig/) für mehr Komfort verfügbar.
::

Wichtige Punkte beim Erstellen einer Vorlage:

- Die gesamte Vorlage muss in `<p>` und `</p>` eingeschlossen sein.
- Verwenden Sie `<br>` für neue Zeilen.

::callout{icon="i-mdi-warning-circle" color="warning"}
Eine Vorlage muss zu gültigem HTML gerendert werden.
::

## Verfügbare Variablen

- `.Documents` - Liste der Dokumente, die sich in der Zwischenablage des Benutzers befinden.
  - `.Id`
  - `.CreatedAt`
  - `.Title`
  - `.State`
  - `.CreatorId`
  - `.Creator` - Siehe [Benutzerinformationsstruktur](#benutzerinformationsstruktur).
  - `.Closed` - Boolean.
  - `.CategoryId`
  - `.Category`- `.Name`
    - `.Description`
- `.Users` - Liste der Bürger/Benutzer, die sich in der Zwischenablage des Benutzers befinden.
  - Siehe [Benutzerinformationsstruktur](#benutzerinformationsstruktur).
- `.Vehicles` - Liste der Fahrzeuge, die sich in der Zwischenablage des Benutzers befinden.
  - `Plate`
  - `Model`
  - `Type`
  - `Owner` - Siehe [Benutzerinformationsstruktur](#benutzerinformationsstruktur).
- `.ActiveChar` - Informationen des Autors/Benutzers, der die Vorlage einreicht.
  - Siehe [Benutzerinformationsstruktur](#benutzerinformationsstruktur).

### Benutzerinformationsstruktur

- `.UserId`
- `.Identifier`
- `.Job` - Bevorzugt `jobLabel` verwenden.
- `.JobLabel`*
- `.JobGrade` - Bevorzugt `jobGradeLabel` verwenden.
- `.JobGradeLabel`*
- `.Firstname`
- `.Lastname`
- `.Dateofbirth` - Im Format `DD.MM.YYYY`.
- `.PhoneNumber` - Optional, möglicherweise nicht immer enthalten.

(*diese Felder sind nur in der `.activeChar`-Variable verfügbar)

## Snippets

### Zugriff auf Erstellerinformationen

```templ
{{ .ActiveChar.Firstname }}, {{ .ActiveChar.Lastname }}
```

### Ersten Bürger abrufen

Den ersten Benutzer in der Liste abrufen (erster in der Zwischenablage des Benutzers):

```templ
{{- $citizen := first .Users -}}
```

Beispiel für den Zugriff auf Bürgerinformationen:

```templ
{{ $citizen.Firstname }}, {{ $citizen.Lastname }} ({{ $citizen.Dateofbirth }})
```

### Aktuelles Datum und Uhrzeit

```templ
{{ now | date "02.01.2006 15:04" }}
```

Weitere Informationen zu verschiedenen Datums- und Zeitformaten finden Sie in der [Golang `time`-Paketdokumentation hier](https://pkg.go.dev/time#pkg-constants).

### Aktuelles Datum

```templ
{{ now | date "02.01.2006" }}
```

Weitere Informationen zu verschiedenen Datums- und Zeitformaten finden Sie in der [Golang `time`-Paketdokumentation hier](https://pkg.go.dev/time#pkg-constants).

### Zeitstempel anzeigen (z.B. `CreatedAt`-Feld)

```templ
{{ .CreatedAt | date "02.01.2006 15:04" }}
```

### Checkboxen/Aufgabenliste

#### Inline-Checkbox

```html
<span data-checked="false" data-type="checkboxStandalone"><label><input type="checkbox"> </label></span>
```

Beispielverwendung:

```html
<p>Checkbox inline <span data-checked="false" data-type="checkboxStandalone"><label><input type="checkbox"> </label></span>with text</p>
```

#### "Task List"/Aufgabenliste

```html
<ul data-type="taskList">
    <li data-checked="false" data-type="taskItem">
        <label><input type="checkbox"><span></span></label><div><p>Ihr erster Text kommt hier hin</p></div>
        <label><input type="checkbox"><span></span></label><div><p>Ihr zweiter Text kommt hier hin</p></div>
    </li>
</ul>
```

##### Checkbox-Listenelement

```html
<label><input type="checkbox"><span></span></label><div><p>Ihr Text kommt hier hin</p></div>
```

## Beispiele

### Liste von Fahrzeugen anzeigen

```templ
{{ if not .Vehicles }}
<p>
Keine Fahrzeuge beteiligt.
</p>
{{ else }}
<ul>
{{- range .Vehicles -}}
<li>{{ .Plate }} - {{ .Owner.Firstname }}, {{ .Owner.Lastname }}</li>
{{- end -}}
</ul>
{{ end }}
```
