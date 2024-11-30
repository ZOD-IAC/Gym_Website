import blogs from "../Data/blog.json";

export default function handler(req, res) {
  const { title, tags } = req.query;

  let filteredBlogs = blogs;

  // Filter by title if title parameter is provided
  if (title) {
    filteredBlogs = filteredBlogs.filter((blog) =>
      blog.title.toLowerCase().includes(title.toLowerCase())
    );
  }

  // Filter by tags if tags parameter is provided (assuming tags are comma-separated)
  if (tags) {
    const tagArray = tags.split(","); // Convert to array
    filteredBlogs = filteredBlogs.filter((blog) =>
      tagArray.every((tag) => blog.tags.includes(tag.trim()))
    );
  }

  res.status(200).json(filteredBlogs);
}
