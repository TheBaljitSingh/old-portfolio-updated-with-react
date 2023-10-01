export default function Friends(props){
    return(
        <div>
            <div className=" ml-12 flex flex-col items-center justify-center hover:bg-indigo-700 bg-gray-900 w-[395px] h-[250px] rounded-lg  hover:cursor-pointer " >
                <div className="hover:border-white  ease-in-out  ">
                <img className="w-32  rounded-[50%] border-4 border-indigo-700 hover:border-white" src={props.image} alt="" />
                <div className="mt-5 text-center ">
                    <p className="mt-1 font-bold text-2xl text-white">{props.name}</p>
                    <p className="mt-2 font-medium text-white">{props.bio}</p>

                </div>

                </div>
               
              

            </div>
        </div>
    )
}
