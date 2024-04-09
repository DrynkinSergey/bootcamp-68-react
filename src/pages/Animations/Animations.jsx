import s from './Animations.module.css'
import { motion } from 'framer-motion'
import { CircleIndicator } from './CircleIndicator'
const Animations = () => {
	return (
		<div>
			<CircleIndicator />
			<h1>Animations</h1>
			<motion.div
				animate={{ scale: [1, 1.1, 1, 1.1, 1, 1.1, 1] }}
				whileTap={{ scale: 0.8 }}
				whileHover={{ scale: 1.1, rotate: 180 }}
				className={s.box}
			></motion.div>
			<motion.div
				className={s.box}
				initial={{ x: -200, opacity: 0 }}
				animate={{ x: 0, opacity: 1, transition: { duration: 2 } }}
			></motion.div>
			<motion.div
				className={s.box}
				animate={{
					scale: [1, 2, 2, 1, 1],
					rotate: [0, 0, 270, 270, 0],
					borderRadius: ['20%', '20%', '50%', '50%', '20%'],
					transition: { duration: 2 },
				}}
			></motion.div>
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem doloribus incidunt deleniti distinctio corrupti
				cupiditate numquam dolorum iusto eos voluptates earum at, voluptatem tempore hic laboriosam quam odio nam sed.
				Cum, rem? Illo deserunt assumenda cum exercitationem porro commodi sed pariatur saepe! Maxime autem similique
				esse tempora blanditiis! Nulla, error! Illum ducimus commodi et rem id assumenda, temporibus nam expedita.
				Consequatur nemo magnam dolores enim at ea modi quis, ipsa atque exercitationem laboriosam, magni adipisci ab
				dolorem praesentium, vero ad voluptatibus. Magni illo blanditiis itaque labore, nihil quo culpa ut. Recusandae
				incidunt ex amet nulla possimus quae dolor exercitationem suscipit dolores consectetur velit rem, perspiciatis
				quos nesciunt, fugit eum natus! Amet, nesciunt nam. Ullam commodi similique debitis soluta et culpa. Dignissimos
				perspiciatis aperiam accusantium ab soluta odit provident vel dolorem molestias optio, neque tempora odio enim
				sit laborum deleniti, hic, eos minima sequi quis voluptate ea aut! Accusamus, debitis necessitatibus? Quidem at
				laudantium sapiente nam ullam, veritatis itaque quas ducimus earum exercitationem porro assumenda voluptatum
				architecto nisi nihil recusandae sequi cupiditate autem debitis consequatur doloribus facere? Obcaecati facere
				nostrum enim! Omnis facilis voluptates obcaecati optio, suscipit blanditiis recusandae incidunt quas in,
				veritatis aperiam, necessitatibus animi. Eos vero voluptatibus earum, ea minima nisi consequatur est natus ex
				non quaerat, facere consectetur. Autem, quisquam? Suscipit, repellat deserunt ratione voluptatum illo dolor
				maiores possimus sed nam debitis eos. Provident adipisci aliquam culpa et explicabo, veniam possimus nemo magni
				ipsum porro distinctio animi minus. Nostrum ipsum fugiat perferendis animi suscipit culpa molestias a vero ut,
				minima accusamus reprehenderit, distinctio aliquid vitae fugit tenetur tempore, quasi sapiente ex quae
				perspiciatis velit corporis quisquam magni. Officiis. Fugiat expedita nam reprehenderit vel quidem mollitia
				consequuntur a dolor eius, ut laboriosam ducimus nulla. Labore vel odio possimus quos. Ut reprehenderit, quia
				debitis ex dolorum quo amet voluptates ab. Blanditiis eaque, illum hic suscipit eos optio atque doloremque minus
				veritatis? Quasi, nostrum dolorem? Reiciendis, numquam assumenda consequatur consequuntur culpa, laudantium
				voluptatum dolores temporibus tempora provident, distinctio rerum illum quaerat. Alias modi nulla ducimus
				reiciendis illo dignissimos vitae iusto, optio, aliquam expedita corrupti maxime doloremque culpa id! Libero
				laboriosam aut laudantium est. Cumque, porro magnam cum provident eligendi repudiandae ipsa. Laborum tempora
				necessitatibus natus unde doloribus error animi iure adipisci dolor libero, esse iusto laudantium autem ad
				minima. Dolore asperiores voluptatum consequatur maiores ipsum omnis labore fugit. Autem, culpa neque? Sequi
				architecto, nemo accusamus enim molestiae illum laudantium unde voluptatibus aliquid ipsum! Blanditiis molestiae
				ipsam enim, debitis vitae impedit nobis doloremque odio, magnam nesciunt exercitationem deserunt quam? Quis,
				amet expedita. Suscipit delectus ipsam voluptatem itaque quas voluptas repellat, excepturi ullam laudantium
				aspernatur voluptatibus nostrum maiores eos accusantium optio vitae ipsum incidunt, commodi minus. Enim fugit in
				nemo laborum aliquam odio? Aspernatur molestiae ipsum, quae pariatur aperiam animi inventore numquam optio
				corrupti suscipit minus nisi architecto! Ducimus, quae suscipit? Animi reprehenderit soluta nesciunt officia
				corrupti ex molestiae, dolorem qui dicta aliquam. Vero fugit a eligendi. Excepturi laboriosam fuga cum placeat
				sapiente necessitatibus rem voluptates enim quos exercitationem? Tenetur a odio ipsum eos, eius consequuntur ad,
				maxime sapiente voluptatibus, porro recusandae natus! Officiis quibusdam animi corporis quod. Nesciunt,
				necessitatibus quis dolores deserunt animi similique repellendus vero earum voluptatum sit consectetur enim
				suscipit, commodi, maxime sequi alias. Deleniti dignissimos vitae tempora corporis modi! Nostrum error minus
				iure odit, officiis eos accusantium. Delectus officiis rem, optio debitis odit obcaecati magnam, labore quos
				adipisci, eum fugit repudiandae enim maiores exercitationem dicta incidunt inventore quo. Quod. Corrupti,
				assumenda! Maiores consectetur illo sint reprehenderit autem, maxime itaque quod accusantium aut praesentium
				eaque temporibus, laudantium quos. Dolor, atque quis? Eaque quibusdam alias ut optio, inventore quo porro ea.
				Nulla ipsam, voluptatem consectetur dolor, officiis vero eligendi fugiat, repudiandae mollitia harum
				perferendis. Eligendi voluptatum tenetur officiis repellendus pariatur possimus dolore, architecto delectus
				voluptates molestiae nulla deleniti labore enim vitae. Laboriosam optio iusto earum harum quidem. At, quisquam,
				consectetur blanditiis laborum earum quibusdam magnam quo facilis nostrum nulla deserunt, ex rem quasi
				exercitationem sequi nihil ipsum voluptate a quos nesciunt. Tenetur, quia. Quas iusto repellat nostrum?
				Doloribus ab laborum numquam magni incidunt nemo totam exercitationem ullam dolorum consectetur odit et
				accusamus culpa nesciunt, mollitia tempora a autem ex necessitatibus aspernatur. Ab totam saepe fuga autem
				expedita molestias quas quos error minima excepturi vitae odio nihil aliquam eveniet libero laudantium
				doloremque, facilis possimus repudiandae velit nisi quis inventore, iste sed! Perferendis. Voluptas quia vero,
				magnam doloremque aspernatur eius cumque esse, porro, quo provident vel sed harum ipsam alias vitae mollitia
				veritatis. Facere quae in vero dolores labore est numquam delectus animi. Labore numquam rem quidem possimus
				explicabo expedita iste error dolore sit dolor quod voluptates, quisquam repellat aliquam? Mollitia molestiae
				harum nihil error delectus dolorem eveniet quod accusantium id, doloremque saepe? Necessitatibus facere nemo
				quaerat beatae sapiente ab vel molestias veritatis cumque dolore, molestiae enim rerum deserunt asperiores sequi
				alias culpa excepturi adipisci, quia placeat ratione, fuga delectus! Ad, alias molestiae. Tempora inventore
				dicta minima tenetur, eaque eius officia quam laborum laudantium consequatur iusto, unde molestias provident
				debitis ipsam sit impedit sed! Delectus laudantium optio reiciendis aperiam nobis perferendis provident debitis!
				Officia laborum dolore excepturi quos odit rerum neque laudantium commodi iste, distinctio possimus minus
				eveniet ducimus maxime architecto. Voluptatum consectetur doloribus debitis eius dolorem laborum quaerat,
				doloremque quasi amet mollitia? Iure, ducimus. Sequi laboriosam veritatis minus dolor tempora quas neque
				dignissimos cum et cupiditate alias, vitae vel debitis saepe nostrum architecto esse iste. Sint cum eius
				temporibus totam ipsam veritatis. Dicta debitis sit totam perspiciatis inventore laboriosam, distinctio modi
				tenetur, nisi, illum veritatis iusto vel exercitationem ducimus minima hic? Maxime, error. Aperiam, ut! Harum
				error accusantium, architecto laudantium ullam ea? Enim, harum consectetur error distinctio assumenda quibusdam.
				Velit, quod ex. Voluptate fugiat aperiam optio! Laborum deserunt numquam, sit ipsa odio atque repellat. Libero
				sunt provident aliquam dolore maxime, possimus quam. Quas, saepe velit magni repellendus natus error. Possimus
				praesentium minus optio eveniet ipsam natus non expedita molestiae reprehenderit molestias impedit, aliquid
				itaque ut corporis! Quas tempora qui officia a hic. Quasi quaerat sequi rem sed dolore inventore iste deleniti
				ea voluptatum, id suscipit maxime excepturi quas vero consequatur possimus facere porro. Omnis ea repudiandae,
				est ipsam ab excepturi repellat nam. Culpa minus cum repellendus odio dignissimos magnam sequi asperiores nihil
				eum, perspiciatis animi, recusandae, sed libero a reprehenderit nisi iusto provident corporis ipsa tempore
				exercitationem atque architecto expedita alias? Fuga! Dolor at aliquid itaque odit necessitatibus magni maxime
				assumenda fugit doloremque minima. Dolorum rerum laborum tempora impedit, nesciunt ad iusto, quas illo ratione
				veniam blanditiis molestiae? Ad laboriosam dolorum enim? Odit amet quasi quia tempora natus, incidunt cumque
				consequatur omnis veniam eius corrupti, beatae vero architecto. Reiciendis, unde veritatis. Magnam illo cum
				impedit facilis consequuntur optio, autem fugiat nobis. Deleniti? Illo quibusdam asperiores accusantium tenetur
				amet repudiandae itaque, magnam vitae maxime repellendus quidem sequi maiores saepe ut! Eius error tempore,
				ratione, dolore quis voluptates consequatur quo hic deserunt nobis aspernatur. Earum quisquam velit quos?
				Maiores, sapiente amet ipsum, atque ab, dolor optio quaerat vitae animi odit eius laborum a delectus saepe
				tempore dolorum reiciendis recusandae impedit ratione veritatis exercitationem? Vel. Nisi pariatur sit quidem
				quos doloribus perspiciatis numquam impedit. Dolores praesentium veritatis illum totam a odio culpa, ipsam magni
				fugiat eos voluptas exercitationem tenetur consequatur architecto saepe obcaecati ea odit! Sequi in aut velit
				architecto blanditiis ipsum harum inventore! Adipisci nesciunt sunt ullam consectetur, repellendus dolore nulla
				quod iusto mollitia cum nobis consequuntur sed numquam non aspernatur aliquid maiores facilis? Velit eaque
				perspiciatis tempora laboriosam neque! Quaerat facilis sint, et ea dolores voluptas ullam minus incidunt modi
				harum perspiciatis eaque. Harum voluptas maiores, porro est minus in odit aliquid voluptatibus. Enim, nisi in.
				Dignissimos minus veniam quas recusandae adipisci magni porro aspernatur deserunt neque optio iste cum voluptate
				facilis quis reprehenderit quam molestiae, doloremque sint praesentium, dolore illum consectetur veritatis?
				Facere officia magni amet qui dolorem maiores voluptates quis cupiditate. Reprehenderit, ipsa ea soluta
				cupiditate quae nemo asperiores numquam debitis aut, a, amet aliquid eos incidunt blanditiis culpa dicta
				consequatur. Placeat provident facilis similique sequi itaque velit mollitia perspiciatis a? Minima neque
				nesciunt sapiente sequi id, deleniti laborum eaque. Quasi doloremque repudiandae earum in cupiditate eum vitae
				neque a dignissimos. Eius totam voluptatem rerum veritatis nulla, laudantium tempora provident dignissimos quae,
				soluta ab culpa quidem illum perferendis, doloremque velit sit natus excepturi ad eligendi nam nostrum expedita?
				Corporis, numquam ipsa? Pariatur sequi porro impedit, dolorum perspiciatis totam quis officia expedita officiis
				fuga illum, velit provident veritatis nemo sunt nulla rem, alias magni. Fuga numquam quo commodi quibusdam
				dignissimos ut deleniti? Labore ducimus similique laboriosam non provident necessitatibus enim voluptas aut,
				vitae doloremque itaque asperiores ipsa fugiat debitis cumque, eos obcaecati. Quisquam fuga deleniti cumque quae
				ipsa tempora aperiam temporibus molestiae! Exercitationem excepturi, laborum nobis sed eos impedit nihil, sequi
				vitae non iste labore dolore magnam. Veritatis libero id reiciendis explicabo obcaecati hic, earum illum magni
				eligendi facere consequatur dicta suscipit? Ad nulla rerum fuga amet! Eligendi vero enim, dolor a aliquam
				impedit facere, similique obcaecati sequi velit eveniet voluptatem, molestias atque? Magnam labore dignissimos
				iusto voluptatibus laboriosam natus nihil tenetur.
			</p>
		</div>
	)
}

export default Animations
