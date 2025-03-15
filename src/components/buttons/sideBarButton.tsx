
interface SideBarButtonProps{
    text: string;
}

const SideBarButton: React.FC<SideBarButtonProps> = ({ text }) => {
    return (
        <div className="flex flex-col h-[80px] text-xl font-semibold items-center justify-center">
            <p>{text}</p>
        </div>
    );
};

export default SideBarButton