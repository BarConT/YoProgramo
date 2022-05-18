-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Portfolio
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema Portfolio
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Portfolio` DEFAULT CHARACTER SET utf8 ;
USE `Portfolio` ;

-- -----------------------------------------------------
-- Table `Portfolio`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Portfolio`.`usuarios` (
  `id` INT NOT NULL,
  `usuario` VARCHAR(45) NULL,
  `contrasenia` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Portfolio`.`persona`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Portfolio`.`persona` (
  `id` INT NOT NULL,
  `nombre` VARCHAR(45) NULL,
  `apellido` VARCHAR(45) NULL,
  `correo` VARCHAR(45) NULL,
  `profesion` VARCHAR(100) NULL,
  `url_foto` VARCHAR(100) NULL,
  `usuarios_id` INT NOT NULL,
  PRIMARY KEY (`id`, `usuarios_id`),
  INDEX `fk_persona_usuarios1_idx` (`usuarios_id` ASC) VISIBLE,
  CONSTRAINT `fk_persona_usuarios1`
    FOREIGN KEY (`usuarios_id`)
    REFERENCES `Portfolio`.`usuarios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Portfolio`.`tipo_empleo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Portfolio`.`tipo_empleo` (
  `id` INT NOT NULL,
  `nombre_tipo` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Portfolio`.`experiencia_laboral`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Portfolio`.`experiencia_laboral` (
  `id` INT NOT NULL,
  `nombreEmpresa` VARCHAR(45) NULL,
  `esTrabajoActual` TINYINT NULL,
  `fechaInicio` DATE NULL,
  `fechaFin` DATE NULL,
  `descripcion` VARCHAR(200) NULL,
  `url_logo` VARCHAR(100) NULL,
  `persona_id` INT NOT NULL,
  `tipo_empleo_id` INT NOT NULL,
  PRIMARY KEY (`id`, `persona_id`, `tipo_empleo_id`),
  INDEX `fk_experiencia_laboral_persona_idx` (`persona_id` ASC) VISIBLE,
  INDEX `fk_experiencia_laboral_tipo_empleo1_idx` (`tipo_empleo_id` ASC) VISIBLE,
  CONSTRAINT `fk_experiencia_laboral_persona`
    FOREIGN KEY (`persona_id`)
    REFERENCES `Portfolio`.`persona` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_experiencia_laboral_tipo_empleo1`
    FOREIGN KEY (`tipo_empleo_id`)
    REFERENCES `Portfolio`.`tipo_empleo` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Portfolio`.`educacion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Portfolio`.`educacion` (
  `id` INT NOT NULL,
  `instituto` VARCHAR(45) NULL,
  `titulo` VARCHAR(100) NULL,
  `periodo` VARCHAR(45) NULL,
  `url_logo` VARCHAR(100) NULL,
  `persona_id` INT NOT NULL,
  PRIMARY KEY (`id`, `persona_id`),
  INDEX `fk_educacion_persona1_idx` (`persona_id` ASC) VISIBLE,
  CONSTRAINT `fk_educacion_persona1`
    FOREIGN KEY (`persona_id`)
    REFERENCES `Portfolio`.`persona` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Portfolio`.`tecnologias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Portfolio`.`tecnologias` (
  `id` INT NOT NULL,
  `nombre` VARCHAR(45) NULL,
  `nivel` INT NULL,
  `persona_id` INT NOT NULL,
  PRIMARY KEY (`id`, `persona_id`),
  INDEX `fk_tecnologias_persona1_idx` (`persona_id` ASC) VISIBLE,
  CONSTRAINT `fk_tecnologias_persona1`
    FOREIGN KEY (`persona_id`)
    REFERENCES `Portfolio`.`persona` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Portfolio`.`proyectos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Portfolio`.`proyectos` (
  `id` INT NOT NULL,
  `nombre` VARCHAR(100) NULL,
  `fecha` VARCHAR(45) NULL,
  `descripcion` VARCHAR(200) NULL,
  `link` VARCHAR(200) NULL,
  `persona_id` INT NOT NULL,
  PRIMARY KEY (`id`, `persona_id`),
  INDEX `fk_proyectos_persona1_idx` (`persona_id` ASC) VISIBLE,
  CONSTRAINT `fk_proyectos_persona1`
    FOREIGN KEY (`persona_id`)
    REFERENCES `Portfolio`.`persona` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Portfolio`.`acerca_de`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Portfolio`.`acerca_de` (
  `id` INT NOT NULL,
  `descripcion` VARCHAR(200) NULL,
  `persona_id` INT NOT NULL,
  PRIMARY KEY (`id`, `persona_id`),
  INDEX `fk_acerca_de_persona1_idx` (`persona_id` ASC) VISIBLE,
  CONSTRAINT `fk_acerca_de_persona1`
    FOREIGN KEY (`persona_id`)
    REFERENCES `Portfolio`.`persona` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
