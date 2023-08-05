type title = {
    title: string
}

export function PageTitle(props: title) {
    const {title} = props;

    return (
        <>
            <h1 className="text-2xl w-64 mt-5 mb-10 font-bold border-b-4 border-gray-400">{title}</h1>
        </>
    );
}