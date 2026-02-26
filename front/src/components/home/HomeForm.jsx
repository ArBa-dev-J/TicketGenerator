function HomeForm() {
return (
    <>
    <section>
        <form>
            <label className="block">Avatar</label>
            <input type="text" className="border" placeholder="Put img url here"/>
            
            <label className="block">Full name</label>
            <input type="text" className="border"/>
            
            <label className="block">Email Address</label>
            <input type="email" className="border" placeholder="example@email.com"/>
            
            <label className="block">Password</label>
            <input type="password" className="border"/>

             <label className="block">Github username</label>
            <input type="password" className="border" placeholder="@yourusername"/>
        </form>
    </section>
    </>
);
}

export default HomeForm;