import sendGrid from '@sendgrid/client';

// eslint-disable-next-line import/prefer-default-export
export const sendMonitorEmail = async (allActiveTenants) => {
  const output = createOutput(allActiveTenants);

  const customers = [{ email: 'andrewkamphhis@gmail.com' }];
  const from = {
    email: 'info@tinygrape.co',
    name: 'Tiny Grape'
  };
  const emailDoc = {
    subject: `NoFraud Monitor`,
    content: output
  };
  await sendEmail(customers, from, emailDoc);
};

const sendEmail = async (customers, from, email) => {
  const personalizations = [];
  for (const customer of customers) {
    personalizations.push({
      to: [{ email: customer.email }],
      subject: email.subject
    });
  }
  const request = {
    method: 'POST',
    url: '/v3/mail/send',
    body: {
      personalizations,
      from: {
        email: from.email,
        name: from.name
      },
      content: [
        {
          type: 'text/html',
          value: email.content
        }
      ]
    }
  };

  // eslint-disable-next-line no-useless-catch
  try {
    if (process.env.NODE_ENV !== 'test') {
      sendGrid.setApiKey(process.env.SENDGRID_API_KEY);
      await sendGrid.request(request);
    }
  } catch (err) {
    throw err;
  }
};

const createOutput = (allActiveTenants) => {
  const now = new Date();
  let output = `
    <table border="1">
      <tr>
        <th>Tenant</th>
        <th>Last Sync</th>
      </tr>
    `;
  allActiveTenants.forEach((tenant) => {
    const syncDate = new Date(tenant.lastSyncDate);

    const diff = now.valueOf() - syncDate.valueOf();
    const diffInHours = diff / 1000 / 60 / 60;

    output += `
      <tr>
        <td>${tenant.id}</td>
        <td>${diffInHours}</td>
      </tr>
      `;
  });
  output += `</table>`;
  return output;
};
