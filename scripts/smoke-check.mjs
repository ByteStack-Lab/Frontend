const backendBase = process.env.API_BASE_URL || 'http://127.0.0.1:8000/api';
const frontendBase = process.env.FRONTEND_BASE_URL || 'http://127.0.0.1:3000';

const checks = [];

async function getJson(url) {
  const response = await fetch(url, {
    headers: {
      Accept: 'application/json'
    }
  });

  if (!response.ok) {
    throw new Error(`Request failed (${response.status}) for ${url}`);
  }

  return response.json();
}

async function getText(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Request failed (${response.status}) for ${url}`);
  }

  return response.text();
}

function assert(condition, successMessage, failMessage) {
  if (!condition) {
    throw new Error(failMessage);
  }

  checks.push(`PASS: ${successMessage}`);
}

async function run() {
  const apiEndpoints = [
    'services',
    'case-studies',
    'blogs',
    'partners',
    'testimonials',
    'products',
    'career-jobs'
  ];

  for (const endpoint of apiEndpoints) {
    const payload = await getJson(`${backendBase}/${endpoint}`);

    assert(
      payload.success === true,
      `API ${endpoint} returned success=true`,
      `API ${endpoint} did not return success=true`
    );

    assert(
      Array.isArray(payload.data) && payload.data.length > 0,
      `API ${endpoint} returned non-empty data`,
      `API ${endpoint} returned empty or invalid data`
    );
  }

  const partnersPayload = await getJson(`${backendBase}/partners`);
  const partnerName = partnersPayload.data[0]?.name;

  const pages = ['/', '/about', '/blog', '/case-studies'];
  for (const page of pages) {
    const html = await getText(`${frontendBase}${page}`);

    assert(
      html.includes('__nuxt'),
      `Frontend page ${page} rendered Nuxt root`,
      `Frontend page ${page} did not render expected Nuxt markup`
    );
  }

  if (partnerName) {
    const aboutHtml = await getText(`${frontendBase}/about`);

    assert(
      aboutHtml.includes(partnerName),
      'About page includes live partner data from backend API',
      `About page does not include backend partner name: ${partnerName}`
    );
  }

  console.log('Smoke checks completed successfully.');
  for (const check of checks) {
    console.log(check);
  }
}

run().catch((error) => {
  console.error('Smoke check failed.');
  console.error(error.message);
  process.exit(1);
});
