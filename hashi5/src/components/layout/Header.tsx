import React from "react";
import Main from "./Main";
import UserInfo from "../Home";

function Header() {
    return (
        <div className="flex w-full bg-red-500">
            <div className="bg-green-500">
                <ul className="hidden md:inline-block justify-end bg-blue-500 pl-16">
                    <li className="md:h-28 w-64 bg-slate-500">ロゴ</li>
                    <li className="md:h-20 w-64 bg-slate-500 border-2">Home</li>
                    <li className="md:h-20 w-64 bg-slate-500 border-2">Mail</li>
                    <li className="md:h-20 w-64 bg-slate-500 border-2">Notification</li>
                    <li className="md:h-20 w-64 bg-slate-500 border-2">BookMarks</li>
                    <li className="md:h-20 w-64 bg-slate-500 border-2">Option</li>
                    <li className="md:h-20 w-64 bg-slate-500 border-2">課題を投稿</li>
                    <li className="md:h-20 w-64 bg-slate-400"></li>
                    <li className="md:h-20 w-64 bg-slate-500 border-2">アイコン</li>
                </ul>
                <div className="flex">
                    <div className="rounded-full h-10 w-10 md:hidden bg-slate-500 border-2">
                        <UserInfo />
                    </div>
                </div>
            </div>
            <div className="h-8 w-20 flex justify-items-center md:hidden">
                <img src="logo.png" alt=""/>
            </div>
            <Main/>
        </div>
    )
}

export default Header;