import { Resource, component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

export const useBlogs = routeLoader$(async ({ params, redirect }) => {
  console.log("fetching data detail");
  const res = await fetch("http://localhost:3000/blogs/" + params.id);
  if (!res.ok) {
    console.log("redirect user");
    throw redirect(302, "/");
  }
  const data = await res.json();

  return data;
});

export default component$(() => {
  const blogData = useBlogs();

  return (
    <div>
      <Resource
        value={blogData}
        onPending={() => <div>Loading...</div>}
        onResolved={(blog) => (
          <div>
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
          </div>
        )}
      />
    </div>
  );
});
