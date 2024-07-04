export default function PageContainer({ heading, children }) {
  return (
    <section>
      <div className="bg-primary_transparent dark:bg-dark_primary_transparent min-h-screen md:min-h-[91.3vh] py-24 text-text_primary dark:text-dark_text_primary">
        <div className="w-5/6 mx-auto">
          <div id="heading_are" className="text-center mb-12 md:mb-24">
            <h1 className="text-4xl font-semibold p-2 border-b-4 inline-block">
              {heading}
            </h1>
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}
