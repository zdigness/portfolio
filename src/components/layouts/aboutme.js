import zoli from '../img/zoli.jpg';

export default function AboutMe() {
	return (
		<div>
			<div className='flex items-center justify-center'>
				<div className='flex flex-col flex-nowrap items-center justify-between mt-8 gap-6'>
					<div className='p-2 bg-gradient-to-r from-white to-[#818283] rounded-full'>
						<img src={zoli} alt='zoli' className='w-32 h-32 rounded-full' />
					</div>
					<div className='flex'>
						<p className='text-[#818283] text-lg'>Hello, I'm Zoli! 👋</p>
					</div>
					<div className='flex flex-col'>
						<span className='sm:text-5xl text-4xl h-12 sm:h-16 flex items-center justify-center bg-gradient-to-r from-white to-[#818283] bg-clip-text text-transparent'>
							Building, managing,
						</span>
						<span className='sm:text-5xl text-4xl h-12 sm:h-16 flex items-center justify-center bg-gradient-to-r from-white to-[#818283] bg-clip-text text-transparent'>
							and optimizing
						</span>
						<span className='sm:text-5xl text-4xl h-12 sm:h-16 flex items-center justify-center bg-gradient-to-r from-white to-[#818283] bg-clip-text text-transparent'>
							full-stack applications.
						</span>
					</div>
					{/* change to /zdigness_cv.pdf in development */}
					<a
						href='/portfolio/zdigness_cv.pdf'
						download='Zoli_Digness_Resume'
						className='flex items-center justify-center w-28 px-6 py-3 bg-[#2B2B2B] text-white font-semibold text-md rounded-lg shadow-md hover:bg-[#1C1C1C] transition duration-200'
					>
						CV
					</a>
				</div>
			</div>
		</div>
	);
}
