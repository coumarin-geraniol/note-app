import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
        Исследуй и делись
        <br className='max-md:hidden' />
      <span className='green_gradient text-center'> NoteApp</span>
    </h1>
    <p className='desc text-center'>

    </p>

    <Feed />
  </section>
);

export default Home;
