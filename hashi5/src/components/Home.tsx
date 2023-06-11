import { signInWithPopup } from '@firebase/auth';
import React from 'react'
import { auth, provider } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function Home() {
    const [user] = useAuthState(auth);

    return (
        <div>
            {user ? (
                <>
                    <UserInfo />
                    <SignOutButton />
                </>
            ) : (
                <SignInButton/>
            )}
        </div>
    );
}


export default Home

//グーグルボタンでサインイン
function SignInButton() {
    const signInWithGoogle = () => {
        //ファイアーベースでグーグルログイン
        signInWithPopup(auth, provider)
    };

    return(
        <button onClick={signInWithGoogle}>
            <p>Googleでサインイン</p>
        </button>
    )
}

//サインアウト
function SignOutButton() {
    return(
        <button onClick={() => auth.signOut()}>
            <p>Googleでサインアウト</p>
        </button>
    )
}


function UserInfo() {
    return(
        <div>
            <img src={auth.currentUser?.photoURL ?? "default image url"} alt="user" />
        </div>
    )
}