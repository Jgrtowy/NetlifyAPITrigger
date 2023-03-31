# Netlify on event trigger

## Use these files in /netlify/functions to send events to API when new deployment approaches

### Example

You can check example usage at /netlify/functions at my [RCONClient](https://github.com/Jgrtowy/RCONClient) repo.
This example sends POST request to /netlify endpoint at my [API](https://github.com/Jgrtowy/JgrtowyAPI/) when this triggers.

### How to use

1. Create new Netlify site
2. Copy these files to /netlify/functions folder
3. Create `.env` file
4. Add `API_URL=<API>` in `.env` file with `<API>` being your API URL
5. Use `netlify build && netlify deploy` to deploy your site. You can also use `netlify functions:serve` to test your functions locally
