import { useIntersection } from "react-use";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import "./App.css";

function Inter() {
    const sectionRef = useRef<HTMLParagraphElement | null>(null);

    const intersection = useIntersection(sectionRef, {
        root: null,
        rootMargin: "0px",
        threshold: 0.2,
    });

    const fadeIn = (element: string) => {
        gsap.to(element, {
            opacity: 1,
            y: -80,
            ease: "power4.out",
            stagger: {
                amount: 0.3,
            },
        });
    };

    const fadeOut = (element: string) => {
        gsap.to(element, {
            opacity: 0,
            y: -30,
            ease: "power4.out",
        });
    };

    useEffect(() => {
        intersection && intersection.intersectionRatio <0.2 ? fadeOut('.fadeIn') : fadeIn('.fadeIn')
    }, [intersection]);

    return (
        <section className="sec" >
            <p className="fadeIn" ref={sectionRef}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sed facere deserunt perferendis explicabo ducimus incidunt similique distinctio aut, blanditiis tempore hic minus exercitationem, in et doloribus cumque optio ad.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur maxime error, eum eligendi tempora tempore quo obcaecati doloribus odio provident laborum ab consequuntur est saepe veniam beatae fuga quas assumenda.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. In optio iusto excepturi quis est ad aliquam expedita maiores nulla inventore temporibus, accusantium provident atque nostrum voluptatibus, ea tempora suscipit repellat!laborum
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem autem iusto ad error. Voluptate quia, molestiae soluta ex asperiores voluptatibus, animi, fuga odit deleniti hic nulla minima suscipit facere totam?
                Dolorem, natus. Consectetur nesciunt mollitia, voluptates eum voluptate officia voluptatibus sequi id minima odio odit dolores obcaecati quaerat at accusantium vitae dignissimos incidunt sint? Omnis delectus saepe optio illo perferendis.
            </p>
            <p className="fadeIn" ref={sectionRef}>
                {/* Your content */}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, corrupti? Et, obcaecati? Laudantium, neque soluta iste eius sit incidunt unde accusantium voluptatum doloremque nihil. Incidunt facilis architecto non porro quibusdam!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eum nobis totam odit recusandae asperiores dolores fugit, reiciendis ad, delectus repellendus iure quos nemo expedita facere sequi optio dolor tempore!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut molestias quos, omnis fugiat doloribus nesciunt corrupti assumenda, maiores provident vel dolor eaque nemo alias? Voluptatibus rerum veritatis itaque eum aliquam.
            </p>
            <p className="fadeIn" ref={sectionRef}>
                {/* Your content */}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores vitae veniam officiis nihil, tenetur eveniet dignissimos, et at expedita earum eius molestiae nulla perferendis minima rem iusto optio ab placeat!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita tempora vitae similique incidunt ad sapiente veritatis assumenda hic totam obcaecati autem quos, eius quaerat laboriosam, minima, debitis magni optio eligendi.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel quod autem, ducimus ratione, aliquam libero necessitatibus quos itaque ea eos reiciendis. Ducimus nemo, architecto magni quis quae quibusdam doloremque animi!
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere cum aut sapiente, quam, sed ducimus in quae quod recusandae quos fuga quaerat eius voluptatem asperiores perferendis amet vel repellendus quibusdam?

            </p>
        </section>
    );
}

export default Inter;
