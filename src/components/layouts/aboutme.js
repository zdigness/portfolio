export default function AboutMe() {
	return (
		<div>
			<div className='flex items-center justify-center'>
				<div className='flex flex-col flex-nowrap items-center justify-between mt-8 gap-6'>
					<div className='p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full'>
						<img
							src='https://avatars.githubusercontent.com/u/77490508?v=4'
							alt='zoli'
							className='w-32 h-32 rounded-full'
						/>
					</div>
					<div className='flex'>
						<p className='text-[#818283] text-lg'>Hello, I'm Zoli! 👋</p>
					</div>
					<div className='flex flex-col'>
						<span className='text-5xl h-16 flex items-center justify-center bg-gradient-to-r from-white to-[#818283] bg-clip-text text-transparent'>
							Building, managing,
						</span>
						<span className='text-5xl h-16 flex items-center justify-center bg-gradient-to-r from-white to-[#818283] bg-clip-text text-transparent'>
							and optimizing
						</span>
						<span className='text-5xl h-16 flex items-center justify-center bg-gradient-to-r from-white to-[#818283] bg-clip-text text-transparent'>
							full-stack applications.
						</span>
					</div>
					<a
						href='/zdigness_cv.pdf'
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
