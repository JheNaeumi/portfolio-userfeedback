

const StatsComponent = () => {
    return(
    <div className="bg-white py-16 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                 A Closer Look at Your User Journey
                </h2>
                <p className="mt-3 text-xl text-gray-500 sm:mt-4">
                   Feedback Statistics
                </p>
            </div>
        </div>
        <div className="mt-10 pb-1">
            <div className="relative">
                <div className="absolute inset-0 h-1/2 bg-white"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <dl className="rounded-lg bg-[#DCF2F1] shadow-lg sm:grid sm:grid-cols-3">
                            <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                                <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                                   Views
                                </dt>
                                <dd className="order-1 text-5xl font-extrabold text-gray-700">500+</dd>
                            </div>
                            <div
                                className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                                <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                                    User Feedback
                                </dt>
                                <dd className="order-1 text-5xl font-extrabold text-gray-700">58%</dd>
                            </div>
                            <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                                <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                                    Review
                                </dt>
                                <dd className="order-1 text-5xl font-extrabold text-gray-700">30+</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default StatsComponent