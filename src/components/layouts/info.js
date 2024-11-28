import email from '../img/email.png';

export default function info() {
	return (
		<div>
			<div className='flex items-center justify-center'>
				<div className='flex flex-col-reverse sm:flex-row flex-nowrap items-center justify-between h-52px w-[80%] sm:mt-10 mt-6 sm:mb-10 border-b-[1px] border-[#3f3f3f]'>
					<div className='flex flex-row gap-2 rounded-xl mb-4'>
						<div className='flex items-center justify-center w-10 h-10 bg-[#2F2F2F] rounded-full'>
							<img src={email} alt='email' className='w-5 h-5' />
						</div>
						<p className='flex items-center justify-center text-[#818283] w-40 h-10 mr-2'>
							zdigness@gmail.com
						</p>
					</div>

					<div className='flex flex-row gap-4 sm:mb-4 mb-2'>
						<a href='https://www.linkedin.com/in/zdigness/' className=''>
							<p className='flex items-center justify-center text-[#818283] h-10'>
								LinkedIn
							</p>
						</a>
						<p className='flex items-center justify-center text-[#818283] h-10'>
							/
						</p>
						<a href='https://github.com/zdigness' className=''>
							<p className='flex items-center justify-center text-[#818283] h-10'>
								GitHub
							</p>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
