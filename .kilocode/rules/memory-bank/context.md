# Active Context: Auryan Pratama Portfolio

## Current State

**Template Status**: ✅ Deployed

The portfolio website for Auryan Pratama (Game & Backend Programmer) has been successfully deployed. It's an interactive portfolio with language switching (EN/ID), skill radar chart, and project filtering.

## Recently Completed

- [x] Base Next.js 16 setup with App Router
- [x] TypeScript configuration with strict mode
- [x] Tailwind CSS 4 integration
- [x] ESLint configuration
- [x] Memory bank documentation
- [x] Recipe system for common features
- [x] Interactive portfolio page with Chart.js radar
- [x] Language switching (English/Indonesian)
- [x] Mode switching (All/Game/Backend)
- [x] Project filtering by category
- [x] Expandable experience details
- [x] Featured WebGL port section
- [x] Awards and education sections

## Current Structure

| File/Directory | Purpose | Status |
|----------------|---------|--------|
| `src/app/page.tsx` | Portfolio page with all interactive features | ✅ Deployed |
| `src/app/layout.tsx` | Root layout with portfolio metadata | ✅ Deployed |
| `src/app/globals.css` | Custom scrollbar and animations | ✅ Deployed |
| `.kilocode/` | AI context & recipes | ✅ Ready |

## Features Implemented

### Interactive Elements
- **Language Switcher**: Toggle between English and Indonesian
- **Mode Switcher**: Filter content by All/Game/Backend
- **Skill Radar Chart**: Dynamic Chart.js radar that adjusts based on mode
- **Project Filtering**: Filter projects by Unity/Backend/All
- **Expandable Experience**: Click to reveal detailed job descriptions

### Sections
1. **Sidebar Profile**: Name, role, location, language/mode switchers, connect info
2. **Summary**: Overview with stats (6+ years, 10+ apps, 3 awards, 3 jams)
3. **Attribute Radar**: Visual skill representation
4. **Technical Stack**: Categorized skills with dimming based on mode
5. **Featured Project**: Rogue Farm WebGL migration highlight
6. **Professional Quest Log**: Work experience timeline
7. **Project Arcade**: Filterable project cards with Play Store links
8. **Achievement Log**: Awards and recognition
9. **Education & Community**: Degree and Game Jam organizer info

## Dependencies Added

| Package | Version | Purpose |
|---------|---------|---------|
| chart.js | 4.5.1 | Radar chart visualization |
| react-chartjs-2 | 5.3.1 | React wrapper for Chart.js |

## Session History

| Date | Changes |
|------|---------|
| 2026-02-23 | Converted HTML portfolio to Next.js with full interactivity |
| Initial | Template created with base setup |
