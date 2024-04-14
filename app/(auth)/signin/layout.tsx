
export default function SigninLayout({children}: any){
    return(
        <div>
            <div className="border-b text-center"> 
                20% off for the next 3 days..
            </div>
            {children}
        </div>
        );
}