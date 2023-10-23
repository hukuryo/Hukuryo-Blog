type title = {
  title: string;
};

export function PageTitle(props: title) {
  const { title } = props;

  return (
    <>
      <h1 className="inline-flex items-center border-l-8 border-stone-800 pl-4 text-2xl font-semibold text-stone-800 duration-300 dark:border-stone-200 dark:text-stone-200 md:text-2xl lg:text-3xl my-6">
        {title}
      </h1>
    </>
  );
}
