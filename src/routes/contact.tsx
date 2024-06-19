export default function Contact() {
    return (
        <div>
            <div class="grid grid-cols-2 m-16 font-light max-w-screen-md mx-auto">
                <div>
                    <h2 class="text-xl">Yhteyshenkilöt</h2>
                    <div class="mt-8">
                        <div>Myynti</div>
                        <div>Mika Kinnunen</div>
                        <div>+358 440 557 333</div>
                        <div><a href="mailto:myynti@evident.fi">myynti@evident.fi</a></div>
                    </div>

                    <div class="mt-8">
                        <div>Toimitusjohtaja</div>
                        <div>Olli Tuomi</div>
                        <div>etunimi.sukunimi@evident.fi</div>
                    </div>
                </div>

                <div>
                    <h2 class="text-xl">Evident Solutions Oy</h2>
                    <div class="mt-8">
                        <div>Y-tunnus: 2374203-1</div>
                        <div>Hatanpään valtatie 2a B</div>
                        <div>33100 Tampere</div>
                        <div>+358 44 28 44 44 2</div>
                    </div>
                </div>
            </div>
            
            <div class="max-w-screen-md mx-auto">
                <iframe width="100%" height="320"
                        src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Hatanpäänvaltatie+2a+B,+33100+Tampere,+Suomi&amp;sll=61.500014,23.765745&amp;sspn=0.042839,0.09304&amp;ie=UTF8&amp;hq=&amp;hnear=Hatanpäänvaltatie+2a+B,+Tampere,+Finland&amp;t=m&amp;z=14&amp;ll=61.497809,23.766024&amp;output=embed&amp;iwloc=near"></iframe>
                <p class="text-sm">
                    <a href="https://maps.google.com/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=Hatanpäänvaltatie+2a+B,+33100+Tampere,+Suomi&amp;sll=61.500014,23.765745&amp;sspn=0.042839,0.09304&amp;ie=UTF8&amp;hq=&amp;hnear=Hatanpäänvaltatie+2a+B,+Tampere,+Finland&amp;t=m&amp;z=14&amp;ll=61.497809,23.766024">
                        Näytä Google Mapsissa
                    </a>
                </p>
            </div>
        </div>
    )
}