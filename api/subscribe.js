export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).send("Use the signup form on the site.");
    return;
  }

  const email = (req.body && req.body.email ? String(req.body.email) : "").trim();
  const honeypot = req.body && req.body.company ? String(req.body.company) : "";

  // Bots fill the hidden field; send them to the thank-you page quietly.
  if (honeypot) {
    res.redirect(303, "/subscribed/");
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    res.redirect(303, "/subscribe-error/");
    return;
  }

  try {
    const response = await fetch("https://api.buttondown.com/v1/subscribers", {
      method: "POST",
      headers: {
        Authorization: `Token ${process.env.BUTTONDOWN_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email_address: email }),
    });

    // 201 = created. 400 with an "already subscribed" style message also counts as a friendly outcome.
    if (response.ok || response.status === 400 || response.status === 409) {
      res.redirect(303, "/subscribed/");
      return;
    }
    res.redirect(303, "/subscribe-error/");
  } catch (err) {
    res.redirect(303, "/subscribe-error/");
  }
}
