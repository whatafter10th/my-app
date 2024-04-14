
export default function AuthLayout({children}: any){
    return(
        <div>
            <div className="border-b text-center"> 
                Exciting Offers going on..
            </div>
            {children}
        </div>
        );
}