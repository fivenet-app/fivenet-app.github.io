---
title: Vorlagen
---

Vorlagen machen die Dokumenterstellung schneller und einheitlicher.
In FiveNet verwenden Vorlagen **HTML** plus **Golang-Templating**, um dynamische Daten einzufügen.

::callout{icon="i-mdi-info-slab-circle"}
FiveNet unterstützt:
- Basisfunktionen von [Golang `html/template`](https://pkg.go.dev/html/template)
- Zusätzliche [`sprig`-Templatefunktionen](https://masterminds.github.io/sprig/)
::

## So funktioniert das Rendering

Wenn eine Vorlage verwendet wird, macht FiveNet Folgendes:
1. Übernimmt Ihren HTML-Inhalt.
2. Ersetzt Template-Ausdrücke wie `{{ .ActiveChar.Firstname }}` durch echte Werte.
3. Rendert das Ergebnis als HTML im Dokument-Editor.

Auswahlen in der Zwischenablage liefern Daten für:
- `.Users`
- `.Vehicles`
- `.Documents`

## Minimale funktionierende Vorlage

Nutzen Sie dies als sicheren Einstieg:

```templ
<p>
Erstellt von: {{ .ActiveChar.Firstname }} {{ .ActiveChar.Lastname }}<br>
Datum: {{ now | date "02.01.2006" }}
</p>
```

::callout{icon="i-mdi-warning-circle" color="warning"}
Eine Vorlage muss zu gültigem HTML rendern, sonst kann die Ausgabe fehlschlagen oder falsch dargestellt werden.
::

## Zentrale Bausteine

### Variablen

```templ
{{ .ActiveChar.Firstname }}
```

### Bedingungen

```templ
{{ if .Users }}
<p>Benutzer ausgewählt.</p>
{{ else }}
<p>Keine Benutzer ausgewählt.</p>
{{ end }}
```

### Schleifen

```templ
<ul>
{{- range .Vehicles -}}
<li>{{ .Plate }} - {{ .Owner.Firstname }} {{ .Owner.Lastname }}</li>
{{- end -}}
</ul>
```

### Häufig genutzte Helfer

```templ
{{- $citizen := first .Users -}}
{{ now | date "02.01.2006 15:04" }}
```

## Sofort nutzbare Snippets

### Erster ausgewählter Bürger

```templ
{{- if .Users -}}
{{- $citizen := first .Users -}}
<p>
Bürger: {{ $citizen.Firstname }} {{ $citizen.Lastname }}<br>
Geburtsdatum: {{ $citizen.Dateofbirth }}
</p>
{{- else -}}
<p>Kein Bürger ausgewählt.</p>
{{- end -}}
```

### Fahrzeugliste mit Fallback

```templ
{{ if not .Vehicles }}
<p>Keine Fahrzeuge beteiligt.</p>
{{ else }}
<ul>
{{- range .Vehicles -}}
<li>{{ .Plate }} - {{ .Owner.Firstname }} {{ .Owner.Lastname }}</li>
{{- end -}}
</ul>
{{ end }}
```

### Signaturblock

```templ
<p>
Eingereicht von: {{ .ActiveChar.Firstname }} {{ .ActiveChar.Lastname }}<br>
Rang: {{ .ActiveChar.JobGradeLabel }}<br>
Datum: {{ now | date "02.01.2006 15:04" }}
</p>
```

## Häufige Fehler

- Ungültige HTML-Ausgabe (fehlende/falsche Tags).
- `.activeChar` statt `.ActiveChar` verwenden.
- Listeneinträge ohne Prüfung auf vorhandene Daten verwenden.
- `<br>` für Zeilenumbrüche in Absätzen vergessen.

## Verfügbare Variablen

### `.Documents`

Liste der Dokumente in der Zwischenablage des Benutzers.

- `.Id`
- `.CreatedAt`
- `.Title`
- `.State`
- `.CreatorId`
- `.Creator` - Siehe [Benutzerinformationsstruktur](#benutzerinformationsstruktur).
- `.Closed` - Boolescher Wert.
- `.CategoryId`
- `.Category`
  - `.Name`
  - `.Description`

### `.Users`

Liste der Bürger/Benutzer in der Zwischenablage des Benutzers.

- Siehe [Benutzerinformationsstruktur](#benutzerinformationsstruktur).

### `.Vehicles`

Liste der Fahrzeuge in der Zwischenablage des Benutzers.

- `.Plate`
- `.Model`
- `.Type`
- `.Owner` - Siehe [Benutzerinformationsstruktur](#benutzerinformationsstruktur).

### `.ActiveChar`

Informationen zum Autor/einreichenden Benutzer.

- Siehe [Benutzerinformationsstruktur](#benutzerinformationsstruktur).

### Benutzerinformationsstruktur

- `.UserId`
- `.Identifier`
- `.Job` - Bevorzugt `.JobLabel` verwenden.
- `.JobLabel`*
- `.JobGrade` - Bevorzugt `.JobGradeLabel` verwenden.
- `.JobGradeLabel`*
- `.Firstname`
- `.Lastname`
- `.Dateofbirth` - Im Format `DD.MM.YYYY`.
- `.PhoneNumber` - Optional, möglicherweise nicht immer enthalten.

(*Diese Felder sind nur in der Variablen `.ActiveChar` verfügbar.)

## Zusätzliche Snippets

### Aktive Benutzerinformationen ausgeben

```templ
{{ .ActiveChar.Firstname }}, {{ .ActiveChar.Lastname }}
```

### Ersten Bürger abrufen

Den ersten Benutzer in der Liste abrufen (erstes Element in der Zwischenablage des Benutzers):

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

Weitere Informationen zu Datums- und Zeitformaten finden Sie in der [Golang-`time`-Paketdokumentation](https://pkg.go.dev/time#pkg-constants).

### Aktuelles Datum

```templ
{{ now | date "02.01.2006" }}
```

Weitere Informationen zu Datums- und Zeitformaten finden Sie in der [Golang-`time`-Paketdokumentation](https://pkg.go.dev/time#pkg-constants).

### Zeitstempel anzeigen (z. B. Feld `CreatedAt`)

```templ
{{ .CreatedAt | date "02.01.2006 15:04" }}
```

### Checkboxen

#### Inline-Checkbox

```html
<span data-checked="false" data-type="checkboxStandalone"><label><input type="checkbox"> </label></span>
```

Beispielverwendung:

```html
<p>Inline-Checkbox <span data-checked="false" data-type="checkboxStandalone"><label><input type="checkbox"> </label></span>mit Text</p>
```

#### Aufgabenliste (Checkbox-Liste)

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

### Fahrzeugliste anzeigen

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
