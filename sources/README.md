# sources/ — sources des PDFs générés

## manuel-enseignant.html → manuel-enseignant.pdf

Source HTML/CSS du Manuel enseignant, optimisé pour impression N&B (peu de couleurs, hiérarchie portée par bordures/typo).

### Régénérer le PDF

```bash
DYLD_FALLBACK_LIBRARY_PATH=/opt/homebrew/lib \
  weasyprint sources/manuel-enseignant.html assets/downloads/manuel-enseignant.pdf
```

### Dépendances

- WeasyPrint (`pip3 install --user weasyprint`)
- Pango (`brew install pango`)
- macOS : exporter `DYLD_FALLBACK_LIBRARY_PATH=/opt/homebrew/lib` au moment de l'appel
