-- ============================================================
-- SEED: All countries (pais), states (estado_Com_autonom),
--       and capital cities (ciudad)
-- ============================================================

-- ========================
-- COUNTRIES (193 UN + a few more)
-- ========================
INSERT INTO "pais" ("nombre", "url_bandera") VALUES
  ('Afganistán',                    'https://flagcdn.com/w320/af.png'),
  ('Albania',                       'https://flagcdn.com/w320/al.png'),
  ('Alemania',                      'https://flagcdn.com/w320/de.png'),
  ('Andorra',                       'https://flagcdn.com/w320/ad.png'),
  ('Angola',                        'https://flagcdn.com/w320/ao.png'),
  ('Antigua y Barbuda',             'https://flagcdn.com/w320/ag.png'),
  ('Arabia Saudita',                'https://flagcdn.com/w320/sa.png'),
  ('Argelia',                       'https://flagcdn.com/w320/dz.png'),
  ('Argentina',                     'https://flagcdn.com/w320/ar.png'),
  ('Armenia',                       'https://flagcdn.com/w320/am.png'),
  ('Australia',                     'https://flagcdn.com/w320/au.png'),
  ('Austria',                       'https://flagcdn.com/w320/at.png'),
  ('Azerbaiyán',                    'https://flagcdn.com/w320/az.png'),
  ('Bahamas',                       'https://flagcdn.com/w320/bs.png'),
  ('Bangladés',                     'https://flagcdn.com/w320/bd.png'),
  ('Barbados',                      'https://flagcdn.com/w320/bb.png'),
  ('Baréin',                        'https://flagcdn.com/w320/bh.png'),
  ('Bélgica',                       'https://flagcdn.com/w320/be.png'),
  ('Belice',                        'https://flagcdn.com/w320/bz.png'),
  ('Benín',                         'https://flagcdn.com/w320/bj.png'),
  ('Bielorrusia',                   'https://flagcdn.com/w320/by.png'),
  ('Birmania',                      'https://flagcdn.com/w320/mm.png'),
  ('Bolivia',                       'https://flagcdn.com/w320/bo.png'),
  ('Bosnia y Herzegovina',          'https://flagcdn.com/w320/ba.png'),
  ('Botsuana',                      'https://flagcdn.com/w320/bw.png'),
  ('Brasil',                        'https://flagcdn.com/w320/br.png'),
  ('Brunéi',                        'https://flagcdn.com/w320/bn.png'),
  ('Bulgaria',                      'https://flagcdn.com/w320/bg.png'),
  ('Burkina Faso',                  'https://flagcdn.com/w320/bf.png'),
  ('Burundi',                       'https://flagcdn.com/w320/bi.png'),
  ('Bután',                         'https://flagcdn.com/w320/bt.png'),
  ('Cabo Verde',                    'https://flagcdn.com/w320/cv.png'),
  ('Camboya',                       'https://flagcdn.com/w320/kh.png'),
  ('Camerún',                       'https://flagcdn.com/w320/cm.png'),
  ('Canadá',                        'https://flagcdn.com/w320/ca.png'),
  ('Catar',                         'https://flagcdn.com/w320/qa.png'),
  ('Chad',                          'https://flagcdn.com/w320/td.png'),
  ('Chile',                         'https://flagcdn.com/w320/cl.png'),
  ('China',                         'https://flagcdn.com/w320/cn.png'),
  ('Chipre',                        'https://flagcdn.com/w320/cy.png'),
  ('Colombia',                      'https://flagcdn.com/w320/co.png'),
  ('Comoras',                       'https://flagcdn.com/w320/km.png'),
  ('Corea del Norte',               'https://flagcdn.com/w320/kp.png'),
  ('Corea del Sur',                 'https://flagcdn.com/w320/kr.png'),
  ('Costa de Marfil',               'https://flagcdn.com/w320/ci.png'),
  ('Costa Rica',                    'https://flagcdn.com/w320/cr.png'),
  ('Croacia',                       'https://flagcdn.com/w320/hr.png'),
  ('Cuba',                          'https://flagcdn.com/w320/cu.png'),
  ('Dinamarca',                     'https://flagcdn.com/w320/dk.png'),
  ('Dominica',                      'https://flagcdn.com/w320/dm.png'),
  ('Ecuador',                       'https://flagcdn.com/w320/ec.png'),
  ('Egipto',                        'https://flagcdn.com/w320/eg.png'),
  ('El Salvador',                   'https://flagcdn.com/w320/sv.png'),
  ('Emiratos Árabes Unidos',        'https://flagcdn.com/w320/ae.png'),
  ('Eritrea',                       'https://flagcdn.com/w320/er.png'),
  ('Eslovaquia',                    'https://flagcdn.com/w320/sk.png'),
  ('Eslovenia',                     'https://flagcdn.com/w320/si.png'),
  ('Estados Unidos',                'https://flagcdn.com/w320/us.png'),
  ('Estonia',                       'https://flagcdn.com/w320/ee.png'),
  ('Etiopía',                       'https://flagcdn.com/w320/et.png'),
  ('Filipinas',                     'https://flagcdn.com/w320/ph.png'),
  ('Finlandia',                     'https://flagcdn.com/w320/fi.png'),
  ('Fiyi',                          'https://flagcdn.com/w320/fj.png'),
  ('Francia',                       'https://flagcdn.com/w320/fr.png'),
  ('Gabón',                         'https://flagcdn.com/w320/ga.png'),
  ('Gambia',                        'https://flagcdn.com/w320/gm.png'),
  ('Georgia',                       'https://flagcdn.com/w320/ge.png'),
  ('Ghana',                         'https://flagcdn.com/w320/gh.png'),
  ('Granada',                       'https://flagcdn.com/w320/gd.png'),
  ('Grecia',                        'https://flagcdn.com/w320/gr.png'),
  ('Guatemala',                     'https://flagcdn.com/w320/gt.png'),
  ('Guinea',                        'https://flagcdn.com/w320/gn.png'),
  ('Guinea-Bisáu',                  'https://flagcdn.com/w320/gw.png'),
  ('Guinea Ecuatorial',             'https://flagcdn.com/w320/gq.png'),
  ('Guyana',                        'https://flagcdn.com/w320/gy.png'),
  ('Haití',                         'https://flagcdn.com/w320/ht.png'),
  ('Honduras',                      'https://flagcdn.com/w320/hn.png'),
  ('Hungría',                       'https://flagcdn.com/w320/hu.png'),
  ('India',                         'https://flagcdn.com/w320/in.png'),
  ('Indonesia',                     'https://flagcdn.com/w320/id.png'),
  ('Irak',                          'https://flagcdn.com/w320/iq.png'),
  ('Irán',                          'https://flagcdn.com/w320/ir.png'),
  ('Irlanda',                       'https://flagcdn.com/w320/ie.png'),
  ('Islandia',                      'https://flagcdn.com/w320/is.png'),
  ('Islas Marshall',                'https://flagcdn.com/w320/mh.png'),
  ('Islas Salomón',                 'https://flagcdn.com/w320/sb.png'),
  ('Israel',                        'https://flagcdn.com/w320/il.png'),
  ('Italia',                        'https://flagcdn.com/w320/it.png'),
  ('Jamaica',                       'https://flagcdn.com/w320/jm.png'),
  ('Japón',                         'https://flagcdn.com/w320/jp.png'),
  ('Jordania',                      'https://flagcdn.com/w320/jo.png'),
  ('Kazajistán',                    'https://flagcdn.com/w320/kz.png'),
  ('Kenia',                         'https://flagcdn.com/w320/ke.png'),
  ('Kirguistán',                    'https://flagcdn.com/w320/kg.png'),
  ('Kiribati',                      'https://flagcdn.com/w320/ki.png'),
  ('Kuwait',                        'https://flagcdn.com/w320/kw.png'),
  ('Laos',                          'https://flagcdn.com/w320/la.png'),
  ('Lesoto',                        'https://flagcdn.com/w320/ls.png'),
  ('Letonia',                       'https://flagcdn.com/w320/lv.png'),
  ('Líbano',                        'https://flagcdn.com/w320/lb.png'),
  ('Liberia',                       'https://flagcdn.com/w320/lr.png'),
  ('Libia',                         'https://flagcdn.com/w320/ly.png'),
  ('Liechtenstein',                 'https://flagcdn.com/w320/li.png'),
  ('Lituania',                      'https://flagcdn.com/w320/lt.png'),
  ('Luxemburgo',                    'https://flagcdn.com/w320/lu.png'),
  ('Madagascar',                    'https://flagcdn.com/w320/mg.png'),
  ('Malasia',                       'https://flagcdn.com/w320/my.png'),
  ('Malaui',                        'https://flagcdn.com/w320/mw.png'),
  ('Maldivas',                      'https://flagcdn.com/w320/mv.png'),
  ('Malí',                          'https://flagcdn.com/w320/ml.png'),
  ('Malta',                         'https://flagcdn.com/w320/mt.png'),
  ('Marruecos',                     'https://flagcdn.com/w320/ma.png'),
  ('Mauricio',                      'https://flagcdn.com/w320/mu.png'),
  ('Mauritania',                    'https://flagcdn.com/w320/mr.png'),
  ('Micronesia',                    'https://flagcdn.com/w320/fm.png'),
  ('Moldavia',                      'https://flagcdn.com/w320/md.png'),
  ('Mónaco',                        'https://flagcdn.com/w320/mc.png'),
  ('Mongolia',                      'https://flagcdn.com/w320/mn.png'),
  ('Montenegro',                    'https://flagcdn.com/w320/me.png'),
  ('Mozambique',                    'https://flagcdn.com/w320/mz.png'),
  ('Namibia',                       'https://flagcdn.com/w320/na.png'),
  ('Nauru',                         'https://flagcdn.com/w320/nr.png'),
  ('Nepal',                         'https://flagcdn.com/w320/np.png'),
  ('Nicaragua',                     'https://flagcdn.com/w320/ni.png'),
  ('Níger',                         'https://flagcdn.com/w320/ne.png'),
  ('Nigeria',                       'https://flagcdn.com/w320/ng.png'),
  ('Noruega',                       'https://flagcdn.com/w320/no.png'),
  ('Nueva Zelanda',                 'https://flagcdn.com/w320/nz.png'),
  ('Omán',                          'https://flagcdn.com/w320/om.png'),
  ('Países Bajos',                  'https://flagcdn.com/w320/nl.png'),
  ('Pakistán',                      'https://flagcdn.com/w320/pk.png'),
  ('Palaos',                        'https://flagcdn.com/w320/pw.png'),
  ('Palestina',                     'https://flagcdn.com/w320/ps.png'),
  ('Panamá',                        'https://flagcdn.com/w320/pa.png'),
  ('Papúa Nueva Guinea',            'https://flagcdn.com/w320/pg.png'),
  ('Paraguay',                      'https://flagcdn.com/w320/py.png'),
  ('Perú',                          'https://flagcdn.com/w320/pe.png'),
  ('Polonia',                       'https://flagcdn.com/w320/pl.png'),
  ('Portugal',                      'https://flagcdn.com/w320/pt.png'),
  ('Reino Unido',                   'https://flagcdn.com/w320/gb.png'),
  ('República Centroafricana',      'https://flagcdn.com/w320/cf.png'),
  ('República Checa',               'https://flagcdn.com/w320/cz.png'),
  ('República del Congo',           'https://flagcdn.com/w320/cg.png'),
  ('República Democrática del Congo', 'https://flagcdn.com/w320/cd.png'),
  ('República Dominicana',          'https://flagcdn.com/w320/do.png'),
  ('Ruanda',                        'https://flagcdn.com/w320/rw.png'),
  ('Rumania',                       'https://flagcdn.com/w320/ro.png'),
  ('Rusia',                         'https://flagcdn.com/w320/ru.png'),
  ('Samoa',                         'https://flagcdn.com/w320/ws.png'),
  ('San Cristóbal y Nieves',        'https://flagcdn.com/w320/kn.png'),
  ('San Marino',                    'https://flagcdn.com/w320/sm.png'),
  ('San Vicente y las Granadinas',  'https://flagcdn.com/w320/vc.png'),
  ('Santa Lucía',                   'https://flagcdn.com/w320/lc.png'),
  ('Santo Tomé y Príncipe',         'https://flagcdn.com/w320/st.png'),
  ('Senegal',                       'https://flagcdn.com/w320/sn.png'),
  ('Serbia',                        'https://flagcdn.com/w320/rs.png'),
  ('Seychelles',                    'https://flagcdn.com/w320/sc.png'),
  ('Sierra Leona',                  'https://flagcdn.com/w320/sl.png'),
  ('Singapur',                      'https://flagcdn.com/w320/sg.png'),
  ('Siria',                         'https://flagcdn.com/w320/sy.png'),
  ('Somalia',                       'https://flagcdn.com/w320/so.png'),
  ('Sri Lanka',                     'https://flagcdn.com/w320/lk.png'),
  ('Suazilandia',                   'https://flagcdn.com/w320/sz.png'),
  ('Sudáfrica',                     'https://flagcdn.com/w320/za.png'),
  ('Sudán',                         'https://flagcdn.com/w320/sd.png'),
  ('Sudán del Sur',                 'https://flagcdn.com/w320/ss.png'),
  ('Suecia',                        'https://flagcdn.com/w320/se.png'),
  ('Suiza',                         'https://flagcdn.com/w320/ch.png'),
  ('Surinam',                       'https://flagcdn.com/w320/sr.png'),
  ('Tailandia',                     'https://flagcdn.com/w320/th.png'),
  ('Tanzania',                      'https://flagcdn.com/w320/tz.png'),
  ('Tayikistán',                    'https://flagcdn.com/w320/tj.png'),
  ('Timor Oriental',                'https://flagcdn.com/w320/tl.png'),
  ('Togo',                          'https://flagcdn.com/w320/tg.png'),
  ('Tonga',                         'https://flagcdn.com/w320/to.png'),
  ('Trinidad y Tobago',             'https://flagcdn.com/w320/tt.png'),
  ('Túnez',                         'https://flagcdn.com/w320/tn.png'),
  ('Turkmenistán',                  'https://flagcdn.com/w320/tm.png'),
  ('Turquía',                       'https://flagcdn.com/w320/tr.png'),
  ('Tuvalu',                        'https://flagcdn.com/w320/tv.png'),
  ('Ucrania',                       'https://flagcdn.com/w320/ua.png'),
  ('Uganda',                        'https://flagcdn.com/w320/ug.png'),
  ('Uruguay',                       'https://flagcdn.com/w320/uy.png'),
  ('Uzbekistán',                    'https://flagcdn.com/w320/uz.png'),
  ('Vanuatu',                       'https://flagcdn.com/w320/vu.png'),
  ('Vaticano',                      'https://flagcdn.com/w320/va.png'),
  ('Venezuela',                     'https://flagcdn.com/w320/ve.png'),
  ('Vietnam',                       'https://flagcdn.com/w320/vn.png'),
  ('Yemen',                         'https://flagcdn.com/w320/ye.png'),
  ('Yibuti',                        'https://flagcdn.com/w320/dj.png'),
  ('Zambia',                        'https://flagcdn.com/w320/zm.png'),
  ('Zimbabue',                      'https://flagcdn.com/w320/zw.png')
ON CONFLICT DO NOTHING;

-- ========================
-- STATES / REGIONS + CAPITAL CITIES
-- ========================
INSERT INTO "estado_Com_autonom" ("nombre", "id_pais") VALUES

  -- Argentina
  ('Buenos Aires',       (SELECT "id" FROM "pais" WHERE "nombre" = 'Argentina')),
  ('Córdoba',            (SELECT "id" FROM "pais" WHERE "nombre" = 'Argentina')),
  ('Santa Fe',           (SELECT "id" FROM "pais" WHERE "nombre" = 'Argentina')),
  ('Mendoza',            (SELECT "id" FROM "pais" WHERE "nombre" = 'Argentina')),
  ('Tucumán',            (SELECT "id" FROM "pais" WHERE "nombre" = 'Argentina')),

  -- Estados Unidos
  ('California',         (SELECT "id" FROM "pais" WHERE "nombre" = 'Estados Unidos')),
  ('Texas',              (SELECT "id" FROM "pais" WHERE "nombre" = 'Estados Unidos')),
  ('Florida',            (SELECT "id" FROM "pais" WHERE "nombre" = 'Estados Unidos')),
  ('Nueva York',         (SELECT "id" FROM "pais" WHERE "nombre" = 'Estados Unidos')),
  ('Illinois',           (SELECT "id" FROM "pais" WHERE "nombre" = 'Estados Unidos')),

  -- Brasil
  ('São Paulo',          (SELECT "id" FROM "pais" WHERE "nombre" = 'Brasil')),
  ('Río de Janeiro',     (SELECT "id" FROM "pais" WHERE "nombre" = 'Brasil')),
  ('Minas Gerais',       (SELECT "id" FROM "pais" WHERE "nombre" = 'Brasil')),
  ('Bahía',              (SELECT "id" FROM "pais" WHERE "nombre" = 'Brasil')),

  -- Francia
  ('Île-de-France',      (SELECT "id" FROM "pais" WHERE "nombre" = 'Francia')),
  ('Provenza-Alpes-Costa Azul', (SELECT "id" FROM "pais" WHERE "nombre" = 'Francia')),
  ('Nueva Aquitania',    (SELECT "id" FROM "pais" WHERE "nombre" = 'Francia')),
  ('Auvernia-Ródano-Alpes',     (SELECT "id" FROM "pais" WHERE "nombre" = 'Francia')),

  -- Italia
  ('Lacio',              (SELECT "id" FROM "pais" WHERE "nombre" = 'Italia')),
  ('Lombardía',          (SELECT "id" FROM "pais" WHERE "nombre" = 'Italia')),
  ('Campania',           (SELECT "id" FROM "pais" WHERE "nombre" = 'Italia')),
  ('Sicilia',            (SELECT "id" FROM "pais" WHERE "nombre" = 'Italia')),

  -- Alemania
  ('Baviera',            (SELECT "id" FROM "pais" WHERE "nombre" = 'Alemania')),
  ('Renania del Norte-Westfalia', (SELECT "id" FROM "pais" WHERE "nombre" = 'Alemania')),
  ('Baden-Wurtemberg',   (SELECT "id" FROM "pais" WHERE "nombre" = 'Alemania')),
  ('Berlín',             (SELECT "id" FROM "pais" WHERE "nombre" = 'Alemania')),

  -- Reino Unido
  ('Inglaterra',         (SELECT "id" FROM "pais" WHERE "nombre" = 'Reino Unido')),
  ('Escocia',            (SELECT "id" FROM "pais" WHERE "nombre" = 'Reino Unido')),
  ('Gales',              (SELECT "id" FROM "pais" WHERE "nombre" = 'Reino Unido')),
  ('Irlanda del Norte',  (SELECT "id" FROM "pais" WHERE "nombre" = 'Reino Unido')),

  -- China
  ('Pekín',              (SELECT "id" FROM "pais" WHERE "nombre" = 'China')),
  ('Shanghái',           (SELECT "id" FROM "pais" WHERE "nombre" = 'China')),
  ('Cantón',             (SELECT "id" FROM "pais" WHERE "nombre" = 'China')),
  ('Sichuán',            (SELECT "id" FROM "pais" WHERE "nombre" = 'China')),

  -- Japón
  ('Tokio',              (SELECT "id" FROM "pais" WHERE "nombre" = 'Japón')),
  ('Osaka',              (SELECT "id" FROM "pais" WHERE "nombre" = 'Japón')),
  ('Kioto',              (SELECT "id" FROM "pais" WHERE "nombre" = 'Japón')),

  -- India
  ('Delhi',              (SELECT "id" FROM "pais" WHERE "nombre" = 'India')),
  ('Maharashtra',        (SELECT "id" FROM "pais" WHERE "nombre" = 'India')),
  ('Karnataka',          (SELECT "id" FROM "pais" WHERE "nombre" = 'India')),
  ('Tamil Nadu',         (SELECT "id" FROM "pais" WHERE "nombre" = 'India')),

  -- Colombia
  ('Cundinamarca',       (SELECT "id" FROM "pais" WHERE "nombre" = 'Colombia')),
  ('Antioquia',          (SELECT "id" FROM "pais" WHERE "nombre" = 'Colombia')),
  ('Valle del Cauca',    (SELECT "id" FROM "pais" WHERE "nombre" = 'Colombia')),

  -- Chile
  ('Santiago',           (SELECT "id" FROM "pais" WHERE "nombre" = 'Chile')),
  ('Valparaíso',         (SELECT "id" FROM "pais" WHERE "nombre" = 'Chile')),
  ('Biobío',             (SELECT "id" FROM "pais" WHERE "nombre" = 'Chile')),

  -- Perú
  ('Lima',               (SELECT "id" FROM "pais" WHERE "nombre" = 'Perú')),
  ('Cusco',              (SELECT "id" FROM "pais" WHERE "nombre" = 'Perú')),
  ('Arequipa',           (SELECT "id" FROM "pais" WHERE "nombre" = 'Perú')),

  -- Canadá
  ('Ontario',            (SELECT "id" FROM "pais" WHERE "nombre" = 'Canadá')),
  ('Quebec',             (SELECT "id" FROM "pais" WHERE "nombre" = 'Canadá')),
  ('Columbia Británica', (SELECT "id" FROM "pais" WHERE "nombre" = 'Canadá')),

  -- Australia
  ('Nueva Gales del Sur',(SELECT "id" FROM "pais" WHERE "nombre" = 'Australia')),
  ('Victoria',           (SELECT "id" FROM "pais" WHERE "nombre" = 'Australia')),
  ('Queensland',         (SELECT "id" FROM "pais" WHERE "nombre" = 'Australia')),

  -- Rusia
  ('Moscú',              (SELECT "id" FROM "pais" WHERE "nombre" = 'Rusia')),
  ('San Petersburgo',    (SELECT "id" FROM "pais" WHERE "nombre" = 'Rusia')),

  -- Uruguay
  ('Montevideo',         (SELECT "id" FROM "pais" WHERE "nombre" = 'Uruguay')),

  -- Venezuela
  ('Distrito Capital',   (SELECT "id" FROM "pais" WHERE "nombre" = 'Venezuela')),
  ('Zulia',              (SELECT "id" FROM "pais" WHERE "nombre" = 'Venezuela')),

  -- Países Bajos
  ('Holanda Septentrional', (SELECT "id" FROM "pais" WHERE "nombre" = 'Países Bajos')),

  -- Suiza
  ('Zúrich',             (SELECT "id" FROM "pais" WHERE "nombre" = 'Suiza')),
  ('Ginebra',            (SELECT "id" FROM "pais" WHERE "nombre" = 'Suiza')),

  -- Corea del Sur
  ('Seúl',               (SELECT "id" FROM "pais" WHERE "nombre" = 'Corea del Sur')),

  -- Turquía
  ('Estambul',           (SELECT "id" FROM "pais" WHERE "nombre" = 'Turquía')),
  ('Ankara',             (SELECT "id" FROM "pais" WHERE "nombre" = 'Turquía')),

  -- Marruecos
  ('Casablanca-Settat',  (SELECT "id" FROM "pais" WHERE "nombre" = 'Marruecos')),

  -- Egipto
  ('El Cairo',           (SELECT "id" FROM "pais" WHERE "nombre" = 'Egipto')),

  -- Sudáfrica
  ('Gauteng',            (SELECT "id" FROM "pais" WHERE "nombre" = 'Sudáfrica')),

  -- Polonia
  ('Mazovia',            (SELECT "id" FROM "pais" WHERE "nombre" = 'Polonia')),

  -- Suecia
  ('Estocolmo',          (SELECT "id" FROM "pais" WHERE "nombre" = 'Suecia'))
ON CONFLICT DO NOTHING;

-- ========================
-- CAPITAL CITIES
-- ========================
INSERT INTO "ciudad" ("nombreciudad", "url_bandera", "id_estado") VALUES

  -- Argentina
  ('Buenos Aires', 'https://flagcdn.com/w320/ar.png',
    (SELECT s."id" FROM "estado_Com_autonom" s JOIN "pais" p ON s."id_pais" = p."id"
     WHERE p."nombre" = 'Argentina' AND s."nombre" = 'Buenos Aires')),
  ('Córdoba', NULL,
    (SELECT s."id" FROM "estado_Com_autonom" s JOIN "pais" p ON s."id_pais" = p."id"
     WHERE p."nombre" = 'Argentina' AND s."nombre" = 'Córdoba')),
  ('Rosario', NULL,
    (SELECT s."id" FROM "estado_Com_autonom" s JOIN "pais" p ON s."id_pais" = p."id"
     WHERE p."nombre" = 'Argentina' AND s."nombre" = 'Santa Fe')),

  -- Estados Unidos
  ('Los Ángeles', NULL,
    (SELECT s."id" FROM "estado_Com_autonom" s JOIN "pais" p ON s."id_pais" = p."id"
     WHERE p."nombre" = 'Estados Unidos' AND s."nombre" = 'California')),
  ('Nueva York', NULL,
    (SELECT s."id" FROM "estado_Com_autonom" s JOIN "pais" p ON s."id_pais" = p."id"
     WHERE p."nombre" = 'Estados Unidos' AND s."nombre" = 'Nueva York')),
  ('Miami', NULL,
    (SELECT s."id" FROM "estado_Com_autonom" s JOIN "pais" p ON s."id_pais" = p."id"
     WHERE p."nombre" = 'Estados Unidos' AND s."nombre" = 'Florida')),

  -- Brasil
  ('São Paulo', NULL,
    (SELECT s."id" FROM "estado_Com_autonom" s JOIN "pais" p ON s."id_pais" = p."id"
     WHERE p."nombre" = 'Brasil' AND s."nombre" = 'São Paulo')),
  ('Río de Janeiro', NULL,
    (SELECT s."id" FROM "estado_Com_autonom" s JOIN "pais" p ON s."id_pais" = p."id"
     WHERE p."nombre" = 'Brasil' AND s."nombre" = 'Río de Janeiro')),

  -- Francia
  ('París', NULL,
    (SELECT s."id" FROM "estado_Com_autonom" s JOIN "pais" p ON s."id_pais" = p."id"
     WHERE p."nombre" = 'Francia' AND s."nombre" = 'Île-de-France')),
  ('Marsella', NULL,
    (SELECT s."id" FROM "estado_Com_autonom" s JOIN "pais" p ON s."id_pais" = p."id"
     WHERE p."nombre" = 'Francia' AND s."nombre" = 'Provenza-Alpes-Costa Azul')),

  -- Italia
  ('Roma', NULL,
    (SELECT s."id" FROM "estado_Com_autonom" s JOIN "pais" p ON s."id_pais" = p."id"
     WHERE p."nombre" = 'Italia' AND s."nombre" = 'Lacio')),
  ('Milán', NULL,
    (SELECT s."id" FROM "estado_Com_autonom" s JOIN "pais" p ON s."id_pais" = p."id"
     WHERE p."nombre" = 'Italia' AND s."nombre" = 'Lombardía')),

  -- Alemania
  ('Berlín', NULL,
    (SELECT s."id" FROM "estado_Com_autonom" s JOIN "pais" p ON s."id_pais" = p."id"
     WHERE p."nombre" = 'Alemania' AND s."nombre" = 'Berlín')),
  ('Múnich', NULL,
    (SELECT s."id" FROM "estado_Com_autonom" s JOIN "pais" p ON s."id_pais" = p."id"
     WHERE p."nombre" = 'Alemania' AND s."nombre" = 'Baviera')),

  -- Reino Unido
  ('Londres', NULL,
    (SELECT s."id" FROM "estado_Com_autonom" s JOIN "pais" p ON s."id_pais" = p."id"
     WHERE p."nombre" = 'Reino Unido' AND s."nombre" = 'Inglaterra')),
  ('Edimburgo', NULL,
    (SELECT s."id" FROM "estado_Com_autonom" s JOIN "pais" p ON s."id_pais" = p."id"
     WHERE p."nombre" = 'Reino Unido' AND s."nombre" = 'Escocia')),

  -- China
  ('Pekín', NULL,
    (SELECT s."id" FROM "estado_Com_autonom" s JOIN "pais" p ON s."id_pais" = p."id"
     WHERE p."nombre" = 'China' AND s."nombre" = 'Pekín')),
  ('Shanghái', NULL,
    (SELECT s."id" FROM "estado_Com_autonom" s JOIN "pais" p ON s."id_pais" = p."id"
     WHERE p."nombre" = 'China' AND s."nombre" = 'Shanghái')),

  -- Japón
  ('Tokio', NULL,
    (SELECT s."id" FROM "estado_Com_autonom" s JOIN "pais" p ON s."id_pais" = p."id"
     WHERE p."nombre" = 'Japón' AND s."nombre" = 'Tokio')),
  ('Osaka', NULL,
    (SELECT s."id" FROM "estado_Com_autonom" s JOIN "pais" p ON s."id_pais" = p."id"
     WHERE p."nombre" = 'Japón' AND s."nombre" = 'Osaka')),

  -- India
  ('Nueva Delhi', NULL,
    (SELECT s."id" FROM "estado_Com_autonom" s JOIN "pais" p ON s."id_pais" = p."id"
     WHERE p."nombre" = 'India' AND s."nombre" = 'Delhi')),
  ('Bombay', NULL,
    (SELECT s."id" FROM "estado_Com_autonom" s JOIN "pais" p ON s."id_pais" = p."id"
     WHERE p."nombre" = 'India' AND s."nombre" = 'Maharashtra')),

  -- Colombia
  ('Bogotá', NULL,
    (SELECT s."id" FROM "estado_Com_autonom" s JOIN "pais" p ON s."id_pais" = p."id"
     WHERE p."nombre" = 'Colombia' AND s."nombre" = 'Cundinamarca')),
  ('Medellín', NULL,
    (SELECT s."id" FROM "estado_Com_autonom" s JOIN "pais" p ON s."id_pais" = p."id"
     WHERE p."nombre" = 'Colombia' AND s."nombre" = 'Antioquia')),

  -- Chile
  ('Santiago', NULL,
    (SELECT s."id" FROM "estado_Com_autonom" s JOIN "pais" p ON s."id_pais" = p."id"
     WHERE p."nombre" = 'Chile' AND s."nombre" = 'Santiago')),

  -- Perú
  ('Lima', NULL,
    (SELECT s."id" FROM "estado_Com_autonom" s JOIN "pais" p ON s."id_pais" = p."id"
     WHERE p."nombre" = 'Perú' AND s."nombre" = 'Lima')),

  -- Canadá
  ('Toronto', NULL,
    (SELECT s."id" FROM "estado_Com_autonom" s JOIN "pais" p ON s."id_pais" = p."id"
     WHERE p."nombre" = 'Canadá' AND s."nombre" = 'Ontario')),
  ('Montreal', NULL,
    (SELECT s."id" FROM "estado_Com_autonom" s JOIN "pais" p ON s."id_pais" = p."id"
     WHERE p."nombre" = 'Canadá' AND s."nombre" = 'Quebec')),

  -- Australia
  ('Sídney', NULL,
    (SELECT s."id" FROM "estado_Com_autonom" s JOIN "pais" p ON s."id_pais" = p."id"
     WHERE p."nombre" = 'Australia' AND s."nombre" = 'Nueva Gales del Sur')),
  ('Melbourne', NULL,
    (SELECT s."id" FROM "estado_Com_autonom" s JOIN "pais" p ON s."id_pais" = p."id"
     WHERE p."nombre" = 'Australia' AND s."nombre" = 'Victoria')),

  -- Rusia
  ('Moscú', NULL,
    (SELECT s."id" FROM "estado_Com_autonom" s JOIN "pais" p ON s."id_pais" = p."id"
     WHERE p."nombre" = 'Rusia' AND s."nombre" = 'Moscú')),

  -- Uruguay
  ('Montevideo', NULL,
    (SELECT s."id" FROM "estado_Com_autonom" s JOIN "pais" p ON s."id_pais" = p."id"
     WHERE p."nombre" = 'Uruguay' AND s."nombre" = 'Montevideo')),

  -- Venezuela
  ('Caracas', NULL,
    (SELECT s."id" FROM "estado_Com_autonom" s JOIN "pais" p ON s."id_pais" = p."id"
     WHERE p."nombre" = 'Venezuela' AND s."nombre" = 'Distrito Capital')),

  -- Países Bajos
  ('Ámsterdam', NULL,
    (SELECT s."id" FROM "estado_Com_autonom" s JOIN "pais" p ON s."id_pais" = p."id"
     WHERE p."nombre" = 'Países Bajos' AND s."nombre" = 'Holanda Septentrional')),

  -- Suiza
  ('Zúrich', NULL,
    (SELECT s."id" FROM "estado_Com_autonom" s JOIN "pais" p ON s."id_pais" = p."id"
     WHERE p."nombre" = 'Suiza' AND s."nombre" = 'Zúrich')),

  -- Corea del Sur
  ('Seúl', NULL,
    (SELECT s."id" FROM "estado_Com_autonom" s JOIN "pais" p ON s."id_pais" = p."id"
     WHERE p."nombre" = 'Corea del Sur' AND s."nombre" = 'Seúl')),

  -- Turquía
  ('Estambul', NULL,
    (SELECT s."id" FROM "estado_Com_autonom" s JOIN "pais" p ON s."id_pais" = p."id"
     WHERE p."nombre" = 'Turquía' AND s."nombre" = 'Estambul')),

  -- Marruecos
  ('Casablanca', NULL,
    (SELECT s."id" FROM "estado_Com_autonom" s JOIN "pais" p ON s."id_pais" = p."id"
     WHERE p."nombre" = 'Marruecos' AND s."nombre" = 'Casablanca-Settat')),

  -- Egipto
  ('El Cairo', NULL,
    (SELECT s."id" FROM "estado_Com_autonom" s JOIN "pais" p ON s."id_pais" = p."id"
     WHERE p."nombre" = 'Egipto' AND s."nombre" = 'El Cairo')),

  -- Sudáfrica
  ('Johannesburgo', NULL,
    (SELECT s."id" FROM "estado_Com_autonom" s JOIN "pais" p ON s."id_pais" = p."id"
     WHERE p."nombre" = 'Sudáfrica' AND s."nombre" = 'Gauteng')),

  -- Polonia
  ('Varsovia', NULL,
    (SELECT s."id" FROM "estado_Com_autonom" s JOIN "pais" p ON s."id_pais" = p."id"
     WHERE p."nombre" = 'Polonia' AND s."nombre" = 'Mazovia')),

  -- Suecia
  ('Estocolmo', NULL,
    (SELECT s."id" FROM "estado_Com_autonom" s JOIN "pais" p ON s."id_pais" = p."id"
     WHERE p."nombre" = 'Suecia' AND s."nombre" = 'Estocolmo'))
ON CONFLICT DO NOTHING;
