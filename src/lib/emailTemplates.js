/**
 * Custom Dark-Themed Email Templates for Tahir Kalaiwala Portfolio
 * Matches the website design: #111111 background, #1b1b1b cards, #ffca9a accents, #00ff88 badges
 */

export function generateAdminNotificationEmail({ name, email, phone, projectType, message }) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Project Inquiry - Tahir Kalaiwala</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0c0c0c; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #ffffff;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #0c0c0c; padding: 40px 16px;">
    <tr>
      <td align="center">
        <!-- Main Email Container -->
        <table role="presentation" width="100%" max-width="600" style="max-width: 600px; background-color: #161616; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 16px; overflow: hidden; box-shadow: 0 10px 40px rgba(0,0,0,0.6);">
          
          <!-- Header Bar -->
          <tr>
            <td style="padding: 28px 32px; background: linear-gradient(135deg, #1b1b1b 0%, #111111 100%); border-bottom: 1px solid rgba(255, 255, 255, 0.08);">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <span style="font-size: 20px; font-weight: 700; color: #ffffff; letter-spacing: -0.5px;">
                      Tahir's <span style="color: #ffca9a;">Portfolio</span>
                    </span>
                  </td>
                  <td align="right">
                    <span style="display: inline-block; background-color: rgba(0, 255, 136, 0.12); color: #00ff88; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; padding: 4px 10px; border-radius: 9999px; border: 1px solid rgba(0, 255, 136, 0.25);">
                      ● New Inquiry
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Main Content -->
          <tr>
            <td style="padding: 32px;">
              <h2 style="margin: 0 0 8px 0; font-size: 24px; font-weight: 600; color: #ffffff; letter-spacing: -0.5px;">
                You have a new client inquiry!
              </h2>
              <p style="margin: 0 0 24px 0; font-size: 14px; color: rgba(255, 255, 255, 0.6); line-height: 1.5;">
                A new inquiry has been submitted through your portfolio contact form at <a href="https://mtinfotech.vercel.app" style="color: #ffca9a; text-decoration: none;">mtinfotech.vercel.app</a>.
              </p>

              <!-- Client Info Table Card -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #1f1f1f; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.06); margin-bottom: 24px; overflow: hidden;">
                <tr>
                  <td style="padding: 14px 18px; border-bottom: 1px solid rgba(255, 255, 255, 0.05); font-size: 13px; color: rgba(255, 255, 255, 0.5); width: 140px; font-weight: 500;">
                    Client Name
                  </td>
                  <td style="padding: 14px 18px; border-bottom: 1px solid rgba(255, 255, 255, 0.05); font-size: 14px; color: #ffffff; font-weight: 600;">
                    ${name}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 14px 18px; border-bottom: 1px solid rgba(255, 255, 255, 0.05); font-size: 13px; color: rgba(255, 255, 255, 0.5); font-weight: 500;">
                    Email Address
                  </td>
                  <td style="padding: 14px 18px; border-bottom: 1px solid rgba(255, 255, 255, 0.05); font-size: 14px; color: #ffca9a; font-weight: 500;">
                    <a href="mailto:${email}" style="color: #ffca9a; text-decoration: none;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 14px 18px; border-bottom: 1px solid rgba(255, 255, 255, 0.05); font-size: 13px; color: rgba(255, 255, 255, 0.5); font-weight: 500;">
                    Phone / WhatsApp
                  </td>
                  <td style="padding: 14px 18px; border-bottom: 1px solid rgba(255, 255, 255, 0.05); font-size: 14px; color: #ffffff;">
                    ${phone ? `<a href="tel:${phone}" style="color: #ffffff; text-decoration: none;">${phone}</a>` : '<span style="color: rgba(255,255,255,0.3);">Not provided</span>'}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 14px 18px; font-size: 13px; color: rgba(255, 255, 255, 0.5); font-weight: 500;">
                    Project Type
                  </td>
                  <td style="padding: 14px 18px; font-size: 14px; color: #00ffff; font-weight: 500;">
                    ${projectType || 'Web Development'}
                  </td>
                </tr>
              </table>

              <!-- Project Message Box -->
              <div style="margin-bottom: 28px;">
                <span style="font-size: 12px; font-weight: 600; text-transform: uppercase; color: rgba(255, 255, 255, 0.5); letter-spacing: 0.5px; display: block; margin-bottom: 8px;">
                  Message & Project Details:
                </span>
                <div style="background-color: #141414; border: 1px solid rgba(255, 255, 255, 0.08); border-left: 3px solid #ffca9a; padding: 18px; border-radius: 8px; font-size: 14px; line-height: 1.6; color: rgba(255, 255, 255, 0.9); white-space: pre-wrap;">
${message}
                </div>
              </div>

              <!-- Quick Action Buttons -->
              <table role="presentation" cellspacing="0" cellpadding="0" style="margin-top: 24px;">
                <tr>
                  <td style="border-radius: 9999px; background-color: #ffffff; margin-right: 12px;">
                    <a href="mailto:${email}?subject=Re:%20Your%20Inquiry%20to%20Tahir%20Kalaiwala" style="display: inline-block; padding: 12px 24px; font-size: 14px; font-weight: 600; color: #000000; text-decoration: none; border-radius: 9999px;">
                      Reply via Email
                    </a>
                  </td>
                  ${phone ? `
                  <td style="padding-left: 12px;">
                    <a href="https://wa.me/${phone.replace(/[^0-9]/g, '')}?text=Hi%20${encodeURIComponent(name)},%20I%20received%20your%20inquiry%20regarding%20your%20project." style="display: inline-block; padding: 12px 20px; font-size: 14px; font-weight: 600; color: #ffffff; background-color: #25D366; text-decoration: none; border-radius: 9999px;">
                      Chat on WhatsApp
                    </a>
                  </td>
                  ` : ''}
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 20px 32px; background-color: #111111; border-top: 1px solid rgba(255, 255, 255, 0.06); text-align: center;">
              <p style="margin: 0; font-size: 12px; color: rgba(255, 255, 255, 0.4);">
                Tahir Kalaiwala • Frontend Developer & Web Designer • <a href="tel:+916355744550" style="color: rgba(255,255,255,0.6); text-decoration: none;">+91 6355744550</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;
}

export function generateClientAutoReplyEmail({ name, projectType }) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Contacting Tahir Kalaiwala</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0c0c0c; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #ffffff;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #0c0c0c; padding: 40px 16px;">
    <tr>
      <td align="center">
        <!-- Main Email Container -->
        <table role="presentation" width="100%" max-width="600" style="max-width: 600px; background-color: #161616; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 16px; overflow: hidden; box-shadow: 0 10px 40px rgba(0,0,0,0.6);">
          
          <!-- Header Bar -->
          <tr>
            <td style="padding: 28px 32px; background: linear-gradient(135deg, #1b1b1b 0%, #111111 100%); border-bottom: 1px solid rgba(255, 255, 255, 0.08);">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <span style="font-size: 20px; font-weight: 700; color: #ffffff; letter-spacing: -0.5px;">
                      Tahir's <span style="color: #ffca9a;">Portfolio</span>
                    </span>
                  </td>
                  <td align="right">
                    <span style="display: inline-block; background-color: rgba(255, 202, 154, 0.12); color: #ffca9a; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; padding: 4px 10px; border-radius: 9999px; border: 1px solid rgba(255, 202, 154, 0.25);">
                      Web Designer & Developer
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Main Body -->
          <tr>
            <td style="padding: 36px 32px;">
              <h1 style="margin: 0 0 12px 0; font-size: 26px; font-weight: 600; color: #ffffff; letter-spacing: -0.5px; line-height: 1.3;">
                Hi ${name || 'there'}, <br />
                <span style="color: #ffca9a;">Thank you for getting in touch!</span>
              </h1>
              
              <p style="margin: 0 0 20px 0; font-size: 15px; color: rgba(255, 255, 255, 0.75); line-height: 1.6;">
                I have received your project inquiry regarding <strong style="color: #ffffff;">${projectType || 'Web Design & Development'}</strong>. Thank you for considering me to build and design your project.
              </p>

              <!-- What to Expect Box -->
              <div style="background-color: #1f1f1f; border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 12px; padding: 22px; margin-bottom: 26px;">
                <h3 style="margin: 0 0 12px 0; font-size: 15px; font-weight: 600; color: #ffffff;">
                  ⚡ What happens next?
                </h3>
                <ul style="margin: 0; padding-left: 20px; color: rgba(255, 255, 255, 0.7); font-size: 14px; line-height: 1.6;">
                  <li style="margin-bottom: 8px;">I will review your requirements and project scope in detail.</li>
                  <li style="margin-bottom: 8px;">You will receive a personalized response from me within <strong>12 to 24 hours</strong> with timeline & budget estimates.</li>
                  <li>We can arrange a quick discovery call to discuss design mockups and technical architecture.</li>
                </ul>
              </div>

              <!-- Urgent / Fast Contact Banner -->
              <div style="background: linear-gradient(135deg, rgba(37, 211, 102, 0.08) 0%, rgba(37, 211, 102, 0.02) 100%); border: 1px solid rgba(37, 211, 102, 0.2); border-radius: 12px; padding: 20px; margin-bottom: 28px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                  <tr>
                    <td>
                      <p style="margin: 0 0 4px 0; font-size: 13px; font-weight: 600; color: #00ff88; text-transform: uppercase; letter-spacing: 0.5px;">
                        Need a quick response?
                      </p>
                      <p style="margin: 0; font-size: 14px; color: rgba(255, 255, 255, 0.8);">
                        Message me directly on WhatsApp or give me a call anytime:
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding-top: 14px;">
                      <a href="https://wa.me/916355744550?text=Hi%20Tahir,%20I%20just%20submitted%20a%20project%20inquiry%20on%20your%20portfolio." style="display: inline-block; background-color: #25D366; color: #ffffff; font-weight: 600; font-size: 13px; padding: 10px 20px; border-radius: 9999px; text-decoration: none; margin-right: 10px;">
                        💬 Open WhatsApp Chat
                      </a>
                      <a href="tel:+916355744550" style="display: inline-block; background-color: rgba(255,255,255,0.1); color: #ffffff; font-weight: 500; font-size: 13px; padding: 10px 18px; border-radius: 9999px; text-decoration: none;">
                        📞 +91 6355744550
                      </a>
                    </td>
                  </tr>
                </table>
              </div>

              <!-- Portfolio Link CTA -->
              <div style="text-align: center; margin-top: 28px;">
                <p style="margin: 0 0 12px 0; font-size: 13px; color: rgba(255, 255, 255, 0.5);">
                  Feel free to check out my latest works and case studies:
                </p>
                <a href="https://mtinfotech.vercel.app/projects" style="display: inline-block; background-color: #ffffff; color: #000000; font-weight: 600; font-size: 14px; padding: 12px 28px; border-radius: 9999px; text-decoration: none;">
                  Explore Projects Showcase →
                </a>
              </div>
            </td>
          </tr>

          <!-- Signature & Footer -->
          <tr>
            <td style="padding: 24px 32px; background-color: #111111; border-top: 1px solid rgba(255, 255, 255, 0.06);">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <p style="margin: 0; font-size: 14px; font-weight: 600; color: #ffffff;">
                      Tahir Kalaiwala
                    </p>
                    <p style="margin: 2px 0 0 0; font-size: 12px; color: rgba(255, 255, 255, 0.5);">
                      Frontend Developer & Web Designer • <a href="mailto:kalaiwalatahir@gmail.com" style="color: #ffca9a; text-decoration: none;">kalaiwalatahir@gmail.com</a>
                    </p>
                  </td>
                  <td align="right">
                    <a href="https://mtinfotech.vercel.app" style="font-size: 12px; color: rgba(255, 255, 255, 0.4); text-decoration: none;">
                      mtinfotech.vercel.app
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;
}
