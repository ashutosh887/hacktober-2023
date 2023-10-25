export function extractUserName(githubURL: string) {
  const regex = /https:\/\/github\.com\/([^/]+)/;
  const match = githubURL.match(regex);

  if (match && match[1]) {
    return match[1];
  } else {
    return null; // Invalid GitHub URL
  }
}
