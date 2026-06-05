import Heading from "@/components/blocks/heading/heading";

export const revalidate = 86400; // 1 day

export default async function Posts(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        next: { revalidate: revalidate }
    });
    const posts = await response.json();
    // console.log(posts);
    return (
        <section className="gap-padding">
            <div className="container">
                <Heading tag="h2" content="Posts" variant="primary" />
                <div className="grid grid-cols-3 gap-4 mt-12 max-md:grid-cols-1 max-lg:grid-cols-2">   
                    {posts.map((post) => (
                        <div key={post.id} className="post mb-5">
                            <h3 className="heading">{post.title}</h3>
                            <p className="description">{post.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        
    )
}