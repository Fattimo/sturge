[![Deploy to GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-blue)](https://github.com/fattimo/sturge/actions/workflows/deploy.yml)

# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

# sturge

## Inspiration

1. https://marlowbaptistchurch.com/
2. https://gardenchurch.com/
3. https://www.elevationchurch.org/
4. https://nominal.io/
5. https://www.wealthsimple.com/en-ca
6. https://www.churchonthelivingedge.com/events

7. https://reality-demo.nucleus.church/calendar
8. https://www.nucleus.church/examples

Core elements:

1. Title page/big hero section
2. Common footer
3. Navbar
4. Giving
5. Sermons
6. About us
7. Contact us

## Scope

Note we generally need screens for both desktop and mobile. If we scope in japanese i18n, we also need screens for desktop / mobile X japanese / english, in case layouts shift. Also note we generally need really high levels of accessibility, as our demographics are older. We really need to focus on the large text + mobile experience.

Overview:

Phase 1:

1. Home page + common elements
   1. Brand kit -- font package, color palette, logos, etc.
   2. Nav bar
   3. Footer
2. Calendar/upcoming events
3. Contact Us
4. About us

Phase 2:

1. Media corner
2. Youtube
3. Photos
4. Get involved page
5. Virtual giving page

Phase 3 / Bonus tasks:

1. Japanese internationalization
2. Pasters corner / weekly blog / newsletter
3. Church member feature

### Phase 1

Home page

- Hero section
- 1-3 important sections that people need all the time
  - Next church date
  - Next event date
  - ???

Common elements

- Navbar
- Footer
- Colors
- Font
- Logos

Calendar / Upcoming events

- Google calendar <-> events page synchronization
- Update content within a google calendar -> update content on the site
  - Title
  - Description
  - Date / time
  - Attachments on google drive (?) -> to explore
- Differentiate between different gcals for different committees/types of events?

Contact Us

- Form that shoots an email / updates some monitored inbox
  - Name
  - Email
  - Phone number
  - What to ask?

About us:

- easy page with rich text content

### Phase 2

Media corner

- iframe embed of Youtube playlist
- iframe embed of google photos?
- Big idea -- keep Youtube playlist updated, keep google photos updated, and the site will also be updated.

Get involved

- IDK what to do with this page
- I suggest a plaintext area that has content for all of our recurring events
- Some churches have a bunch of nested pages for everything they do. I think this scales poorly and makes for a bad experience

Virtual giving page

- Hyperlink to the presbytery

### Phase 3

Japanese internationalization

- A button that allows for the website to be rendered in japanese

Pasters corner / weekly blog / newsletter

- Some way to sync a rich text source -> blog format
- Could outsource to 3rd party (e.g. substack) and just hyperlink
- Could look into iframe solutions

Church member feature

- Just for fun. pictures of members w short bio

## Quotes

T-shirt sizing, design / eng

- XL: 2 weeks
- L: 1 Week
- M: 0.5 week
- S: Days

1. Home page + common elements: XL / M
2. Calendar/upcoming events: M / M
3. Contact Us: S / M

Phase 2:

1. Media corner M / M
2. Get involved page S / S
3. Virtual giving page S / S

Phase 3 / Bonus tasks:

1. Japanese internationalization S / L
2. Pasters corner / weekly blog / newsletter L / L
3. Church member feature M / M

Design sizes:

- 1 XL - 2 weeks
- 1 L - 1 weeks
- 3 M - 1.5 weeks
- 4 S - 1 weeks

  5.5 weeks

Eng sizes:

- 2 L - 2 weeks
- 5 M - 2.5 weeks
- 2 S - 0.5 weeks

5 weeks

- 10.5 weeks of labor
- 20 hours / week
- 210 billable hours

40$ hour rate = $8400

Open questions

1. Maintenance cost?
2.
