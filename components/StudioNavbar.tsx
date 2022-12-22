import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

function StudioNavbar(props: any) {
	return (
		<div>
			<div className="flex items-center justify-between p-5">
				<Link href="/" className="text-[#f7ab0a] flex items-center">
					<ArrowUturnLeftIcon className="h-6 w-6 text-[#f7ab0a] mr-2" />
					Go the Website
				</Link>
				<div className="hidden md:flex p-5 rounded-lg justify-center border-2 border-[#f7ab0a]">
					<h1 className="font-bold text-white">
						Want Coding challenges & Solution sent to your indox daily? 👉
					</h1>
					<Link href="#" className="text-[#f7ab0a] font-bold ml-2">
						www.papareact.com/universityofcode
					</Link>
				</div>
			</div>
			<>{props.renderDefault(props)}</>
		</div>
	);
}

export default StudioNavbar;
