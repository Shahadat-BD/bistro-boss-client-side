const MenuItemBg = ({title,para}) => {
    return (
           <div className='mb-20 about'>
             <div className='flex items-center text-center '>
                <div className='bg-[#0808086a] text-white p-10 w-3/4 h-72 m-auto pt-16 mt-14'>
                    <h1 className='text-3xl mb-3'>{title}</h1>
                    <p className='w-4/5 m-auto'>{para}</p>
                </div>
             </div>
        </div>
    );
};

export default MenuItemBg;