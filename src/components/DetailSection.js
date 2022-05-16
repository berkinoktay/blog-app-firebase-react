import React from 'react';
import Sidebar from './Sidebar';
import { useParams, Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';
import Seperator from './Seperator';
const DetailSection = () => {
  const { categoryName } = useParams();
  return (
    <main className="flex-1 w-full pt-8 pb-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-start">
          <section className="flex flex-1 flex-col bg-white rounded shadow">
            <div className="p-7">
              <div className="flex items-center capitalize text-sm mb-3">
                <Link to="/">Anasayfa</Link> <MdKeyboardArrowRight />
                <span className="text-red-500"> {categoryName}</span>
              </div>
              <h1 className="font-semibold text-3xl">
                Read This To Change How You Mind
              </h1>
              <div className="my-3 text-xs text-gray-700 flex items-center ">
                <span className='after:content-["·"] after:mx-2'>
                  Yazar: <strong>Berkin Oktay</strong>
                </span>
                <span>MAR 23, 2021</span>
              </div>
              <Seperator />
            </div>
            <figure className="w-full block">
              <img
                src="https://api.noudeveloper.com/uploads/thumb_19_af7ee7e31a.jpg"
                alt=""
                className="max-w-full h-96 object-fill w-full "
              />
            </figure>
            <div className="p-6">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae deserunt consequuntur maiores consequatur excepturi
                fugiat, inventore debitis vitae cum. Soluta laborum quo modi a
                sapiente eligendi et inventore excepturi itaque! Praesentium
                pariatur consectetur officiis error temporibus quisquam sed,
                sunt eos incidunt suscipit, ut, quibusdam laudantium impedit
                possimus quia fuga dolorum cum odio? Dicta vitae sint eius
                dignissimos eveniet id laudantium? Dicta vel quibusdam nihil
                cupiditate magni hic culpa illo fugit consequuntur non molestias
                repellat nemo iste laudantium earum obcaecati eaque
                perspiciatis, facere soluta. Laboriosam odio deserunt officia
                eum excepturi? Provident. Magnam aliquid harum debitis ad,
                adipisci fugit minima laboriosam voluptatem eum quam
                perspiciatis praesentium quo modi, possimus nostrum saepe
                explicabo id et. Magni praesentium ad, ut nobis porro beatae
                hic! Aspernatur eius suscipit non accusamus officiis nisi
                tempore distinctio dolores. Tenetur eos fugit voluptatibus
                numquam nobis perspiciatis repudiandae quas provident rerum
                architecto! Aliquam aliquid eos odio debitis rem sit earum. A ex
                omnis nisi dolorem officia unde soluta sunt quo ipsa maiores,
                iste debitis perferendis sint dolore aperiam incidunt, laborum
                eveniet tenetur exercitationem. Quaerat nam aperiam, saepe
                commodi molestiae recusandae! Quod eaque illo eius et eum
                dolorem aut ab laboriosam quibusdam aliquid blanditiis,
                voluptatum debitis atque culpa corrupti quisquam modi deserunt.
                Ipsum quis ipsa doloremque debitis hic sed quam suscipit! Maxime
                obcaecati esse alias omnis itaque magnam veniam soluta ipsum,
                asperiores iste necessitatibus, eaque sit. Explicabo perferendis
                aut, molestiae iste laborum natus ratione doloremque? Odit,
                totam. Sint at mollitia similique? Omnis, magni quas minus,
                aliquid odit, obcaecati molestiae magnam cupiditate culpa itaque
                aut aperiam delectus quisquam fugit dolorum. Beatae commodi
                nulla necessitatibus impedit consequatur magnam quos dolor aut
                minima quibusdam? Molestiae quod iure tempora a? Odio, corrupti,
                aspernatur ullam dolor impedit eaque dolorem quasi esse
                asperiores possimus sed quo accusamus voluptatum quia quae modi
                aliquam facilis nam harum amet et. Eos quod provident assumenda
                quaerat expedita debitis sint incidunt harum voluptatum enim
                quos, tempora omnis hic labore atque, nulla cupiditate illum
                minima. Necessitatibus aliquam iusto voluptates libero commodi
                vero laboriosam. Quos, porro. Voluptatibus quas labore sit saepe
                dolorem voluptate harum ipsum fuga placeat ullam accusantium,
                odit, libero corporis? Quibusdam eum aliquam neque similique
                dicta ipsam numquam expedita? Dolore, obcaecati sed. Facilis
                reprehenderit laborum quaerat officiis, perspiciatis ipsam error
                corporis nostrum nesciunt deleniti delectus vero, illo eveniet
                facere? Fugiat provident, sequi eveniet beatae adipisci voluptas
                fuga, quo voluptatem quis earum accusantium? Ab voluptate
                deleniti voluptatum voluptas fuga dignissimos consequuntur
                possimus maiores a. Dolor, corrupti et! Alias eius doloribus
                expedita deleniti corporis perferendis id eaque tenetur, iure
                maiores architecto? Animi, blanditiis beatae? Nemo, repudiandae
                excepturi. Sit blanditiis dolor itaque dolores aspernatur cumque
                in eaque magni. Esse temporibus suscipit dicta, eos et, nam
                laborum, natus quo voluptatum porro recusandae. Nemo aperiam
                enim nam. Ducimus voluptatem quod corporis deleniti explicabo
                porro quidem nihil provident minima ipsam, tempore harum, rem
                illum tenetur consectetur? Aut eos perspiciatis praesentium
                porro labore tempore doloribus dolore odio saepe aperiam.
                Voluptatem optio maiores dolorem, aliquid, rem explicabo sit
                molestias ut eos repudiandae provident alias architecto! Nam
                sapiente quos quasi iusto molestiae. Nihil nam exercitationem
                consequatur doloribus animi illum, impedit deserunt! Dolore
                dignissimos quidem, eveniet illum sunt repudiandae odit
                blanditiis necessitatibus molestias recusandae eligendi, placeat
                rerum non autem quam, iure provident mollitia. Natus velit
                voluptates accusamus saepe magnam aspernatur eos in. Nihil
                dolorum nobis consectetur cupiditate eaque voluptate ut ratione
                praesentium nostrum qui ipsa iure maiores explicabo deserunt
                ipsum totam quo asperiores, eligendi mollitia hic modi illo?
                Laudantium itaque atque inventore! Ea error eum a repellat,
                tempore quibusdam at quis, iste aliquam id, harum aperiam
                veritatis. Veniam sed iste ad totam est. Officiis, pariatur
                omnis dolore optio fugit voluptas maxime beatae!
              </p>
            </div>
          </section>
          <Sidebar />
        </div>
      </div>
    </main>
  );
};

export default DetailSection;
