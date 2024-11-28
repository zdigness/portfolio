// screened images
import movie from '../img/movie.png';
import react from '../img/react.png';
import js from '../img/js.png';
import postgres from '../img/postgres.png';
import node from '../img/node.png';

// savor images
import money from '../img/money.png';
import django from '../img/django.png';
import python from '../img/python.png';

// link images
import github from '../img/github.png';
import live from '../img/live.png';

// css

export default function project() {
	return (
		<div>
			<div className='flex flex-col items-center justify-center mt-20 mb-20 gap-10'>
				<div>
					<span className='text-4xl h-16 flex items-center justify-center bg-gradient-to-r from-white to-[#818283] bg-clip-text text-transparent'>
						Explore my work.
					</span>
				</div>
				<div className='flex flex-col sm:flex-row gap-10'>
					<div className='group flex flex-col sm:flex-col bg-[#1E1E1E] mt-10 border-[2px] border-[#2b2b2b] p-10 w-72 h-96 gap-6 pt-10 hover:pt-10 transition-all overflow-hidden sm:pt-28'>
						<img src={movie} alt='movie' className='w-[28px] h-[28px]' />
						<h1 className='text-[#818283] text-xl'>Screened</h1>
						<p className='text-[#818283]'>
							Daily movie guessing game based off top LetterBoxd reviews.
						</p>
						<div className='flex flex-row gap-2'>
							<img src={react} alt='react' className='w-7 h-7' />
							<img src={js} alt='js' className='w-7 h-7' />
							<img src={postgres} alt='postgres' className='w-7 h-7' />
							<img src={node} alt='node' className='w-7 h-7' />
						</div>
						{/* Hidden links */}
						<div className='flex sm:hidden flex-row items-center justify-center gap-4 mt-2 scale-90 transition-all ease-in-out duration-300 group-hover:flex group-hover:scale-100'>
							<a
								href='https://screened.vercel.app/'
								className='flex items-center justify-center w-14 h-12 bg-[#2B2B2B] rounded-lg'
							>
								<img src={live} alt='github' className='w-7 h-7' />
							</a>
							<a
								href='https://github.com/zdigness/screened'
								className='flex items-center justify-center w-14 h-12 bg-[#2B2B2B] rounded-lg'
							>
								<img src={github} alt='live' className='w-7 h-7' />
							</a>
						</div>
					</div>
					<div className='group flex flex-col bg-[#1E1E1E] mt-10 border-[2px] border-[#2b2b2b] p-10 w-72 h-96 gap-6 pt-10 hover:pt-10 transition-all overflow-hidden sm:pt-28'>
						<img src={money} alt='money' className='w-[28px] h-[28px]' />
						<h1 className='text-[#818283] text-xl'>Savor</h1>
						<p className='text-[#818283]'>
							Budget application to track and display spending metrics.
						</p>
						<div className='flex flex-row gap-2'>
							<img src={django} alt='django' className='w-7 h-7' />
							<img src={python} alt='python' className='w-7 h-7' />
							<img src={postgres} alt='postgres' className='w-7 h-7' />
						</div>
						{/* Hidden links */}
						<div className='flex sm:hidden flex-row items-center justify-center gap-4 mt-2 scale-90 transition-all ease-in-out duration-300 group-hover:flex group-hover:scale-100'>
							<a
								href='https://zolidigness.engineer/'
								className='flex items-center justify-center w-14 h-12 bg-[#2B2B2B] rounded-lg'
							>
								<img src={live} alt='github' className='w-7 h-7' />
							</a>
							<a
								href='https://github.com/zdigness/personal_finance'
								className='flex items-center justify-center w-14 h-12 bg-[#2B2B2B] rounded-lg'
							>
								<img src={github} alt='live' className='w-7 h-7' />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
