```dataview
TABLE
from "" 
where !contains(file.tags, "#done") 
and !contains(file.folder, "10 - Postaci")
and !contains(file.folder, "4 - Miejsca")
and !contains(file.folder, "8 - Zjawiska i wydarzenia")
sort file.name asc
```