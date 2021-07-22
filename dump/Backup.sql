-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: localhost    Database: db_salvus
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `healthprofessional`
--

DROP TABLE IF EXISTS `healthprofessional`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `healthprofessional` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `username` text NOT NULL,
  `date` date NOT NULL,
  `email` text NOT NULL,
  `cpf` text NOT NULL,
  `telefone` text NOT NULL,
  `password` text NOT NULL,
  `sexo` enum('masculino','feminino') NOT NULL,
  `cep` text NOT NULL,
  `logradouro` text NOT NULL,
  `cidade` text NOT NULL,
  `bairro` text NOT NULL,
  `numcasa` text NOT NULL,
  `profissao` enum('medico','enfermeiro','tecnicoEnfermagem','fonoaudiologia','nutricionista','fisioterapeuta') NOT NULL,
  `numregistro` text NOT NULL,
  `especialidade` text,
  `localidadedeatuacao` text NOT NULL,
  `deslocamentomax` text NOT NULL,
  `randomnumber` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `healthprofessional`
--

LOCK TABLES `healthprofessional` WRITE;
/*!40000 ALTER TABLE `healthprofessional` DISABLE KEYS */;
INSERT INTO `healthprofessional` VALUES (1,'Teste','1985-01-12','teste@gmail.com','123456789','86985746321','123','masculino','65053390','Rua Dez','São Luís','São Bernardo','903','medico','63524','Cirurgia Geral','Maranhão','50',NULL),(2,'Raquel Luzia Jéssica Alves','1994-02-24','raquelluziajessicaalves_@bds.com.br','91594986509','9129942576','123456','feminino','67105150','Rua da Prainha','Ananindeua','Marituba','350','medico','32561','Pediatria','pará','44',NULL),(3,'Vanessa Mariana Aurora Martins','1943-07-02','vvanessamarianaauroramartins@cpfl.com.br','01883492009','9485858545','123456','feminino','33855200','Rua Pouso Alegre','Ribeirão das Neves','Sevilha (1ª Seção)','857','enfermeiro','95862','Pediatria','Minas Gerais','30',NULL),(4,'Isis Andrea Aparício','1966-05-16','isisandreaaparicio_@stricker.eu.com','29225193173','65995970393','123456','feminino','78065414','Rua Holanda','Cuiabá','Jardim Europa','889','enfermeiro','14253','Pediatria','Mato Grosso','20',NULL),(5,'Anderson Otávio Victor Ramos','1954-06-01','andersonotaviovictorramos_@gruposandino.com.br','46825088815','7939483926','123456','masculino','49097000','Avenida São João Batista','Aracaju','Ponto Novo','775','enfermeiro','523423','Pediatria','Aracaju','20',NULL),(6,'Flávia Sophia Antônia Baptista','1962-06-01','flaviasophiaantoniabaptista@heindmec.com.br','45545550119','14985674253','123456','feminino','78715758','Rua Vinte','Rondonópolis','Jardim Liberdade','405','tecnicoEnfermagem','10236','Pediatria','Mato Grosso','16',NULL),(7,'Ruan Cauã Nogueira','1944-08-21','ruancauanogueiraruancauanogueira@gmailo.com','96272157592','68985746321','123456','masculino','49092639','Rua Quinze','Aracaju','Olaria','424','tecnicoEnfermagem','02154','Pediatria','Aracaju','13',NULL),(8,'Nicole Sabrina Emilly Barbosa','1961-04-23','nicolesabrinaemillybarbosa@yahoo.com','59067396885','63954862514','123456','feminino','40270050','Rua Rio Tocantins','Salvador','Vila Laura','557','fonoaudiologia','23221','Pediatria','Salvador','51',NULL),(9,'Levi Raul da Luz','1944-09-02','levirauldaluzlevirauldaluz@santarte.com','87275348047','24956987152','123456','masculino','84345971','Rua Principal, s/n','Ventania','Barro Preto','537','fonoaudiologia','67184','clínica','Paraná','22',NULL),(10,'Danilo Lucas Pires','1956-01-21','danilolucaspires-81@dep.ufscar.br','31409253015','2739600670','123456','masculino','29160514','Rua Rio Taquarí','Serra','Hélio Ferraz','541','nutricionista','46821','clínica','Espirito santo','42',NULL),(11,'Agatha Carolina Nair Bernardes','1962-03-07','agathacarolinanairbernardes@patriciagrillo.adv.br','06566477365','5138185128','123456','feminino','90550002','Avenida Benjamin Constant','Porto Alegre','São João','417','fisioterapeuta','2584','Pediatria','Rio de janeiro','12',NULL),(12,'Isadora Aparecida Lara Silveira','1995-10-23','isadoraaparecidalarasilveira-84@amordeconvite.com.br','20198984898','4528288814','123456','feminino','85813187','Rua Francisco Vaz de Lima','Cascavel','Brazmadeira','180','fisioterapeuta','7536','','Pará','20',NULL),(13,'Vitória Agatha Sônia Ramos','1991-05-24','vitoriaagathasoniaramos@schon.com.br','93285738820','5329679259','123456','feminino','96224120','Rua Juvenal de Souza Freitas','Rio Grande','Povo Novo','488','medico','35648','','Boa viagem','41',NULL),(14,'Rosa Benedita Mendes','1997-06-23','rosabeneditamendes@maggitoyota.com.br','56074705801','8229447619','123456','feminino','57072310','Rua Antônio Florêncio de Araújo Lima','Maceió','Cidade Universitária','780','fisioterapeuta','8598','Gerontologia','Maceió','30',NULL),(15,'Aline Catarina Cláudia Rocha','2003-03-13','alinecatarina@ntiequipamentos.com.br','63177980608','9529259763','123456','feminino','69316396','Avenida Nazaré Filgueiras','Boa Vista','Senador Hélio Campos','775','medico','53435','Ginecologia','Roraima','12',NULL);
/*!40000 ALTER TABLE `healthprofessional` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `knex_migrations`
--

DROP TABLE IF EXISTS `knex_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `knex_migrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `batch` int DEFAULT NULL,
  `migration_time` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `knex_migrations`
--

LOCK TABLES `knex_migrations` WRITE;
/*!40000 ALTER TABLE `knex_migrations` DISABLE KEYS */;
/*!40000 ALTER TABLE `knex_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `knex_migrations_lock`
--

DROP TABLE IF EXISTS `knex_migrations_lock`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `knex_migrations_lock` (
  `index` int unsigned NOT NULL AUTO_INCREMENT,
  `is_locked` int DEFAULT NULL,
  PRIMARY KEY (`index`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `knex_migrations_lock`
--

LOCK TABLES `knex_migrations_lock` WRITE;
/*!40000 ALTER TABLE `knex_migrations_lock` DISABLE KEYS */;
INSERT INTO `knex_migrations_lock` VALUES (1,0);
/*!40000 ALTER TABLE `knex_migrations_lock` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'db_salvus'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-07-22 17:40:04
