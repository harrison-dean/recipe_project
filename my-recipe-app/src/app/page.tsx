"use client";

import Image from "next/image";
import { useEffect } from "react";
import { PageFlip } from "page-flip"

export default function Home() {
	
	useEffect(() => {
		const bookDiv = document.getElementById("book");
		if (bookDiv) {
			const pageFlip = new PageFlip(bookDiv,
				{ width: 800, height: 500, usePortrait: false});
			pageFlip.loadFromHTML(document.querySelectorAll(".my-page"));
			pageFlip.on("changeState", (e) => {
				console.log(pageFlip.getCurrentPageIndex());
				});
			}
	}, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
		<div id="book">
			<div className="my-page" data-density="hard">
				<div className="cover">
					recipe book cover
				</div>
			</div>
			<div className="my-page" data-density="hard">
				<div className="recipe">
					<p id="recipe_title">test recipe</p>
					<div id="section">
						<div id="ingredients">
							<ul>test ingredient</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="my-page" data-density="hard">
				Page one
			</div>
			<div className="my-page" data-density="hard">
				Page two
			</div>
			<div className="my-page" data-density="hard">
				Page three
			</div>
			<div className="my-page" data-density="hard">
				Page four
			</div>
			<div className="my-page" data-density="hard">
				Last page
			</div>

		</div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
