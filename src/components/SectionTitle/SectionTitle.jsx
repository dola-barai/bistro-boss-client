const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="md:w-3/12 text-center mx-auto my-8">
            <p className="text-yellow-600 mb-2">--- {subHeading} ---</p>
            <p className="text-4xl font-semibold uppercase border-y-4 py-4">{heading}</p>
        </div>
    );
};

export default SectionTitle;