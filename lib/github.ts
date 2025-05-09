import { getGithubLastEdit } from "fumadocs-core/server";

export const getLastModified = async (page: { file: { path: string } }) => {
  try {
    const lastEdit = await getGithubLastEdit({
      owner: "subhadeeproy3902",
      repo: "mvpblocks",
      path: `content/docs/${page.file.path}`,
      token: `Bearer ${process.env.GITHUB_TOKEN}`,
    });

    return lastEdit;
  } catch (error) {
    console.error("Error fetching last modified:", error);
    return null;
  }
};
