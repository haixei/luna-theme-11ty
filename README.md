# Luna Theme
Luna is a complex blog theme using 11ty, including site search, markdown plugins and code highlighting.

## Features
*Markdown plugins:*
- Mathjax (LaTeX)
- Code blocks
- Text color highlighting
- BibTeX

*Other:*
- Lazy loading for images
- Table of contents
- Site search (Pagefind)
- Light/dark mode
- Mobile friendly

## Usage
Make sure you have a reasonably recent version of Node installed on your machine.
1. Copy the project
2. Install packages
    ```
        npm install
    ```
3. Build the site, you only do it for the first time running the project, skip this step otherwise
     ```
        npm run build
    ```
4. Run and watch in development mode
    ```
        npm run dev
    ```

## Creating series
A serie is a front matter that you can add to your post. In ```_data/series.js``` customize your series' names, use the short name in your markdown file.
Add a new class in ```main.scss``` using the short name of the series to give it a custom color.