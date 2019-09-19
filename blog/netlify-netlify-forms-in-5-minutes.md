---
path: /blog/netfliy-and-netlify-forms-in-5-minutes
date: 2019-02-25T18:26:13.861Z
title: Netlify & Netlify Forms in 5 minutes
readTime: 5 min
author: Tom Settle
authorImage: /assets/img_3915.jpg
coverImage: /assets/gatsby-netlify.jpg
preview: >-
  In many wesbites these days we see contact forms. Netlify offers form
  functionality that is super easy to add to any forms that will then be saved
  on Netlifys servers and viewable to you in many ways. This is great for any
  data that you are grabbing off of your site through forms...
tags:
  - Gatsby
  - Netlify
  - React
  - JavaScript
  - Tutorial
---
## Netlifiy + Gatsby is a beautiful match ❤️

In many websites these days we see contact forms. Netlify offers form functionality that is **super** easy to add to any forms that will then be saved on Netlifys servers and viewable to you in many ways. This is great for any data that you are grabbing off of your site through forms.

![netlify](https://media.graphcms.com//yBwpwuQTrql5jyVAmk7y)

### Deploying with Netlify

Netlify makes it cake to deploy using their Github app.

1. Sign up for [Netlify](https://www.netlify.com/)
2. Under Sites - choose **New Site from Git**
3. Connect and authorize Github
4. Choose repo/branch
5. Add any production variables under "Advanced Options"

![netlify-git](https://media.graphcms.com//KCe7iUTDRxCF1XYDmBlR)

And as easy as that your site will be built and deployed directly through your GitHub repo. The great thing here too is that now every commit will continuously deploy your site. So adding new updates is as easy as a commit to the original repo that will trigger a redeploy on Netlify.

## Adding Netlify Forms

Now let's take a look at connecting any forms you have with [Netlify Forms](https://www.netlify.com/docs/form-handling/)

I am going to describe this using vanilla **HTML **and as well as **JSX **with React

### HTML Form

This is super straightforward on the form that you want to collect the data from all you have to do is add the `netlify` or `data-netlify="true"` attribute to the `<form></form>` tag. Netlify docs give this example.

```
<form name="contact" method="POST" data-netlify="true">
  <p>
    <label>Your Name: <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Your Role: <select name="role[]" multiple>
      <option value="leader">Leader</option>
      <option value="follower">Follower</option>
    </select></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
```

The `name` attribute is what the form submissions will be listed under in the Netlify UI like such. My form name is `name="Contact Form"`

![netlify-form](https://media.graphcms.com//kFwviIS1Te2en5v8RxvE)

By default, when visitors complete a form, they will see a generically styled success message with a link back to the form page. You can replace the default success message with a custom page you create by adding an action attribute to the <form> tag, entering the path of your custom page (like "/pages/success") as the value. The path must be relative to the site root, starting with a /. ([Netlify Forms](https://www.netlify.com/docs/form-handling/))

Now within Netlify your submissions will be accessible and can be linked to other notification services using the form's settings (ie. Email, Slack, Salesforce, etc). The free tier gets 100 form submissions per month and anything more than that Netlify will automatically bump you up to the Forms Pro Tier.

### JSX Form

These are a little bit more tricky and gave me some trouble when I was trying to get it going on my site. Not as straightforward as the HTML form.

Netlify published a blog post that describes the process in great detail [here](https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/)

The summary though is that the hidden input field is key when rendering the HTML via a React Component.

For example...
```
      ReactDOM.render(
        <form name="contact" method="post">
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>Your Name: <input type="text" name="name"/></label>
          </p>
          <p>
            <label>Your Email: <input type="email" name="email"/></label>
          </p>
          <p>
            <label>Message: <textarea name="message"></textarea></label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>,
        document.getElementById("root")
      );
```

The first input field that is hidden is what will make this work.
`<input type="hidden" name="form-name" value="contact" />`

Be sure that the hidden inputs `value` attribute matches the forms `name` and you should be good!

### Additional Features

Netlify offers tons more features that can be used with their forms such as...

- Spam Filtering
- ReCaptcha
- Notifications
- AJAX Form Submissions

... and more

Check out their docs [here](https://www.netlify.com/docs/form-handling/#receiving-submissions)

Until then thanks for checking out this quick and easy tut!
