const FormContainer = ({ title, description, children }) => (
  <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-16">
    <div className="w-full bg-white shadow-lg px-16 rounded-md">
      <div>
        <h2 className="mt-6 font-roboto text-center text-3xl font-extrabold text-gray-900">
          {title}
        </h2>
        <p className="mt-2 font-roboto text-center text-sm text-gray-600">{description}</p>
      </div>
      {children}
    </div>
  </div>
);

export default FormContainer;
