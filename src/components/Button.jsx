export default function Button({children, ...props}) {
    return <button className="px-4 py-2 font-semibold uppercase rounded text-stone-900 bg-amber-400 hover:bg-amber-500" {...props}>{children}</button> 
}

//...props를 사용하는 이유는 컴포넌트에 전달된 모든 props를 해당 요소에 "스프레드"하여 간편하게 전달하기 위함임