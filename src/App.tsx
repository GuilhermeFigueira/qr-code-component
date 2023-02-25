function App() {
	return (
		<div className="flex h-full">
			<main className="bg-white w-80 rounded-2xl p-4 items-center m-auto  h-fit shadow-lg ">
				<img
					src="./src/assets/image-qr-code.png"
					alt="QR Code"
					className="rounded-2xl "
				/>
				<footer className="p-6 flex flex-col gap-3">
					<strong className="font-bold text-md text-blue-700 text-center">
						Improve your front-end skills by building projects
					</strong>
					<span className="font-normal text-blue-300 text-center">
						Scan the QR code to visit Frontend Mentor and take your
						coding skills to the next level
					</span>
					<div className="text-center">
						Challenge by{" "}
						<a
							href="https://www.frontendmentor.io?ref=challenge"
							target="_blank"
						>
							Frontend Mentor
						</a>
						. Coded by{" "}
						<a
							href="https://github.com/guilhermefigueira"
							target="_blank"
							className="text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-sky-700 font-bold hover:text-lg transition-all"
						>
							Guilherme Figueira
						</a>
						.
					</div>
				</footer>
			</main>
		</div>
	);
}

export default App;
