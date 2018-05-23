//In this tree we have the different options that a user can select within the lens table
//Not all parts of this tree are used. Only for "foco", "reduccion" and "Tratamiento" 			
function populateTree(tree){
				
				//Lente
				tree.add(['Vista','L/V','gafa','vista',[],''],'L', tree.traverseBF);

						//Vista
						tree.add(['Neutra', 'L/V/N', 'foco','Gafas sin graduar',['Lentes de material orgánico CR39','Entrega 10-15 días laborables'],'+0€'], 'L/V', tree.traverseBF);	

								//Neutra
								tree.add(['Hide','L/V/N/Hi','reduccion','Hide',[],''],'L/V/N',tree.traverseBF);

									//Hide
									tree.add(['Hide','L/V/N/Hi/Hi','tratamiento','Hide',[],''],'L/V/N/Hi',tree.traverseBF);
									// tree.add(['Polarizada','L/V/N/Hi/P', 'tratamiento','Polarizada', [],'+30€'], 'L/V/N/Hi' , tree.traverseBF);

									// tree.add(["Ninguno", 'L/V/N/Hi/N', 'tratamiento','Sin tratamientos adicionales',[],'+0€'], 'L/V/N/Hi' , tree.traverseBF);
					
						//Vista
						tree.add(['Monofocal','L/V/M', 'foco','Gafas con lentes monofocales',['Solo para cerca o lejos','Entrega 10-15 días laborables'],'+0€'], 'L/V', tree.traverseBF);
								

								//Monofocal
								tree.add(['150', 'L/V/M/50', 'reduccion','Lentes sin reducción',['Máximo 3 dioptrías de esfera y/o 2 de cilindro'],'incluido'], 'L/V/M', tree.traverseBF);
										
										//50
										tree.add(["Azules", 'L/V/M/50/A', 'tratamiento','Bye Blue (Filtro de azules)',['Reduce la transmisión de la luz azul que emiten las pantallas (en el espectro de 380-455 nm) y elimina la fatiga visual ¡Solo recomendadas para interior porque el efecto puede resultar molesto!'],'+20€'],'L/V/M/50', tree.traverseBF);
												

												//Azules
												tree.add(['Ya soy cliente', 'L/V/M/50/A/CL', 'graduacion1'], 'L/V/M/50/A', tree.traverseBF);
											
												tree.add(['Adjunto una imagen con mi graduación', 'L/V/M/50/A/AD', 'graduacion1'], 'L/V/M/50/A', tree.traverseBF);

												tree.add(['Relleno aquí mi graduación', 'L/V/M/50/A/RE',] , 'L/V/M/50/A', tree.traverseBF);


														//Relleno
														tree.add(['Esfera', 'L/V/M/50/A/RE/ES','graduacion2'], 'L/V/M/50/A/RE', tree.traverseBF);

														tree.add(['Cilindro', 'L/V/M/50/A/RE/C','graduacion2'], 'L/V/M/50/A/RE', tree.traverseBF);

														tree.add(['Eje', 'L/V/M/50/A/RE/EJ','graduacion2'], 'L/V/M/50/A/RE' , tree.traverseBF);

										//50
										tree.add(["Hidrófobo", 'L/V/M/50/H', 'tratamiento','Tratamiento hidrófobo',['Este tratamiento repele el agua, polvo, aceite y evita que se adhiera la suciedad.'],'+10€'],'L/V/M/50', tree.traverseBF);
												

												//Hidrofobo
												tree.add(['Ya soy cliente', 'L/V/M/50/H/CL', 'graduacion1'], 'L/V/M/50/H', tree.traverseBF);
											
												tree.add(['Adjunto una imagen con mi graduación', 'L/V/M/50/H/AD', 'graduacion1'], 'L/V/M/50/H', tree.traverseBF);

												tree.add(['Relleno aquí mi graduación', 'L/V/M/50/H/RE','graduacion1'] , 'L/V/M/50/H', tree.traverseBF);


														//Relleno
														tree.add(['Esfera', 'L/V/M/50/H/RE/ES','graduacion2'], 'L/V/M/50/H/RE', tree.traverseBF);

														tree.add(['Cilindro', 'L/V/M/50/H/RE/C','graduacion2'], 'L/V/M/50/H/RE', tree.traverseBF);

														tree.add(['Eje', 'L/V/M/50/H/RE/EJ','graduacion2'], 'L/V/M/50/H/RE' , tree.traverseBF);
										//50
										tree.add(["Ninguno", 'L/V/M/50/N', 'tratamiento','Sin tratamientos adicionales',[],''],'L/V/M/50', tree.traverseBF);
												

												//Hidrofobo
												tree.add(['Ya soy cliente', 'L/V/M/50/N/CL', 'graduacion1'], 'L/V/M/50/N', tree.traverseBF);
											
												tree.add(['Adjunto una imagen con mi graduación', 'L/V/M/50/N/AD', 'graduacion1'], 'L/V/M/50/N', tree.traverseBF);

												tree.add(['Relleno aquí mi graduación', 'L/V/M/50/N/RE','graduacion1'] , 'L/V/M/50/N', tree.traverseBF);


														//Relleno
														tree.add(['Esfera', 'L/V/M/50/N/RE/ES','graduacion2'], 'L/V/M/50/N/RE', tree.traverseBF);

														tree.add(['Cilindro', 'L/V/M/50/N/RE/C','graduacion2'], 'L/V/M/50/N/RE', tree.traverseBF);

														tree.add(['Eje', 'L/V/M/50/N/RE/EJ','graduacion2'], 'L/V/M/50/N/RE' , tree.traverseBF);

								
								//Monofocal
								tree.add(['160', 'L/V/M/60', 'reduccion','Lentes reducidas de índice 1,60 (20% más finas)',['Recomendadas para valores de más de 3 en esfera y/o más de 2 en cilindro','Si tienes más de 3 en cilindro (astigmatismo) escríbenos'], '+20€'], 'L/V/M', tree.traverseBF);
										


										//60
										tree.add(["Azules", 'L/V/M/60/A', 'tratamiento','Bye Blue (Filtro de azules)',['Reduce la transmisión de la luz azul que emiten las pantallas (en el espectro de 380-455 nm) y elimina la fatiga visual ¡Solo recomendadas para interior porque el efecto puede resultar molesto!'],'+20€'],'L/V/M/60', tree.traverseBF);
												

												//Azules
												tree.add(['Ya soy cliente', 'L/V/M/60/A/CL', 'graduacion1'], 'L/V/M/60/A', tree.traverseBF);
											
												tree.add(['Adjunto una imagen con mi graduación', 'L/V/M/60/A/AD', 'graduacion1'], 'L/V/M/60/A', tree.traverseBF);

												tree.add(['Relleno aquí mi graduación', 'L/V/M/60/A/RE','graduacion1'] , 'L/V/M/60/A', tree.traverseBF);

														
														//Relleno
														tree.add(['Esfera', 'L/V/M/60/A/RE/ES','graduacion2'], 'L/V/M/60/A/RE', tree.traverseBF);

														tree.add(['Cilindro', 'L/V/M/60/A/RE/C','graduacion2'], 'L/V/M/60/A/RE', tree.traverseBF);

														tree.add(['Eje', 'L/V/M/60/A/RE/EJ','graduacion2'], 'L/V/M/60/A/RE' , tree.traverseBF);
										//60
										tree.add(["Hidrófobo", 'L/V/M/60/H', 'tratamiento','Tratamiento hidrófobo',['Este tratamiento repele el agua, polvo, aceite y evita que se adhiera la suciedad.'],'+10€'],'L/V/M/60', tree.traverseBF);

												
												//Hidrofobo
												tree.add(['Ya soy cliente', 'L/V/M/60/H/CL', 'graduacion1'], 'L/V/M/60/H', tree.traverseBF);
											
												tree.add(['Adjunto una imagen con mi graduación', 'L/V/M/60/H/AD', 'graduacion1'], 'L/V/M/60/H', tree.traverseBF);

												tree.add(['Relleno aquí mi graduación', 'L/V/M/60/H/RE','graduacion1'] , 'L/V/M/60/H', tree.traverseBF);

														
														//Relleno
														tree.add(['Esfera', 'L/V/M/60/H/RE/ES','graduacion2'], 'L/V/M/60/H/RE', tree.traverseBF);

														tree.add(['Cilindro', 'L/V/M/60/H/RE/C','graduacion2'], 'L/V/M/60/H/RE', tree.traverseBF);

														tree.add(['Eje', 'L/V/M/60/H/RE/EJ','graduacion2'], 'L/V/M/60/H/RE' , tree.traverseBF);
										//60
										tree.add(["Ninguno", 'L/V/M/60/N', 'tratamiento','Sin tratamientos adicionales',[],''],'L/V/M/60', tree.traverseBF);
												

												//Hidrofobo
												tree.add(['Ya soy cliente', 'L/V/M/60/N/CL', 'graduacion1'], 'L/V/M/60/N', tree.traverseBF);
											
												tree.add(['Adjunto una imagen con mi graduación', 'L/V/M/60/N/AD', 'graduacion1'], 'L/V/M/60/N', tree.traverseBF);

												tree.add(['Relleno aquí mi graduación', 'L/V/M/60/N/RE','graduacion1'] , 'L/V/M/60/N', tree.traverseBF);


														//Relleno
														tree.add(['Esfera', 'L/V/M/60/N/RE/ES','graduacion2'], 'L/V/M/60/N/RE', tree.traverseBF);

														tree.add(['Cilindro', 'L/V/M/60/N/RE/C','graduacion2'], 'L/V/M/60/N/RE', tree.traverseBF);

														tree.add(['Eje', 'L/V/M/60/N/RE/EJ','graduacion2'], 'L/V/M/60/N/RE' , tree.traverseBF);
								//Monofcal
								tree.add(["167", 'L/V/M/67', 'reduccion','Lentes reducidas de índice 1,67 (35% más finas)',['Recomendadas para más de 5 (-) en esfera','Si tienes más de 6 en esfera (+) escríbenos'], '+40€'], 'L/V/M', tree.traverseBF);
										

										//67
										tree.add(["Azules", 'L/V/M/67/A', 'tratamiento','Bye Blue (Filtro de azules)',['Reduce la transmisión de la luz azul que emiten las pantallas (en el espectro de 380-455 nm) y elimina la fatiga visual ¡Solo recomendadas para interior porque el efecto puede resultar molesto!'],'+20€'],'L/V/M/67', tree.traverseBF);
												

												//Azules
												tree.add(['Ya soy cliente', 'L/V/M/67/A/CL', 'graduacion1'], 'L/V/M/67/A', tree.traverseBF);
											
												tree.add(['Adjunto una imagen con mi graduación', 'L/V/M/67/A/AD', 'graduacion1'], 'L/V/M/67/A', tree.traverseBF);

												tree.add(['Relleno aquí mi graduación', 'L/V/M/67/A/RE','graduacion1'] , 'L/V/M/67/A', tree.traverseBF);
														

														//Relleno
														tree.add(['Esfera', 'L/V/M/67/A/RE/ES','graduacion2'], 'L/V/M/67/A/RE', tree.traverseBF);

														tree.add(['Cilindro', 'L/V/M/67/A/RE/C','graduacion2'], 'L/V/M/67/A/RE', tree.traverseBF);

														tree.add(['Eje', 'L/V/M/67/A/RE/EJ','graduacion2'], 'L/V/M/67/A/RE' , tree.traverseBF);
										//67
										tree.add(["Hidrófobo", 'L/V/M/67/H', 'tratamiento','Tratamiento hidrófobo',['Este tratamiento repele el agua, polvo, aceite y evita que se adhiera la suciedad.'],'+10€'],'L/V/M/67', tree.traverseBF);
												

												//Hidrofobo
												tree.add(['Ya soy cliente', 'L/V/M/67/H/CL', 'graduacion1'], 'L/V/M/67/H', tree.traverseBF);
											
												tree.add(['Adjunto una imagen con mi graduación', 'L/V/M/67/H/AD', 'graduacion1'], 'L/V/M/67/H', tree.traverseBF);

												tree.add(['Relleno aquí mi graduación', 'L/V/M/67/H/RE','graduacion1'] , 'L/V/M/67/H', tree.traverseBF);
														

														//Relleno
														tree.add(['Esfera', 'L/V/M/67/H/RE/ES','graduacion2'], 'L/V/M/67/H/RE', tree.traverseBF);

														tree.add(['Cilindro', 'L/V/M/67/H/RE/C','graduacion2'], 'L/V/M/67/H/RE', tree.traverseBF);

														tree.add(['Eje', 'L/V/M/67/H/RE/EJ','graduacion2'], 'L/V/M/67/H/RE' , tree.traverseBF);
										//67
										tree.add(["Ninguno", 'L/V/M/67/N', 'tratamiento','Sin tratamientos adicionales',[],''],'L/V/M/67', tree.traverseBF);
												

												//Hidrofobo
												tree.add(['Ya soy cliente', 'L/V/M/67/N/CL', 'graduacion1'], 'L/V/M/67/N', tree.traverseBF);
											
												tree.add(['Adjunto una imagen con mi graduación', 'L/V/M/67/N/AD', 'graduacion1'], 'L/V/M/67/N', tree.traverseBF);

												tree.add(['Relleno aquí mi graduación', 'L/V/M/67/N/RE','graduacion1'] , 'L/V/M/67/N', tree.traverseBF);


														//Relleno
														tree.add(['Esfera', 'L/V/M/67/N/RE/ES','graduacion2'], 'L/V/M/67/N/RE', tree.traverseBF);

														tree.add(['Cilindro', 'L/V/M/67/N/RE/C','graduacion2'], 'L/V/M/67/N/RE', tree.traverseBF);

														tree.add(['Eje', 'L/V/M/67/N/RE/EJ','graduacion2'], 'L/V/M/67/N/RE' , tree.traverseBF);


						//Vista
						tree.add(['Progresiva', 'L/V/P', 'foco', 'Gafas progresivas',['Para lejos, cerca y distancia intermedia', 'Entrega 10-15 días laborables'],'+120€'], 'L/V', tree.traverseBF);
								
								//Progresiva
								tree.add(["150", 'L/V/P/50', 'reduccion','Lentes sin reducción',['Máximo 3 dioptrías de esfera y/o 2 de cilindro'],'incluido'],'L/V/P', tree.traverseBF);
								
										//50
										tree.add(["Azules", 'L/V/P/50/A', 'tratamiento','Bye Blue (Filtro de azules)',['Reduce la transmisión de la luz azul que emiten las pantallas (en el espectro de 380-455 nm) y elimina la fatiga visual ¡Solo recomendadas para interior porque el efecto puede resultar molesto!'],'+20€'],'L/V/P/50', tree.traverseBF);
												
												//Azules
												tree.add(['Ya soy cliente', 'L/V/P/50/A/CL', 'graduacion1'], 'L/V/P/50/A', tree.traverseBF);
											
												tree.add(['Adjunto una imagen con mi graduación', 'L/V/P/50/A/AD', 'graduacion1'], 'L/V/P/50/A', tree.traverseBF);

												tree.add(['Relleno aquí mi graduación', 'L/V/P/50/A/RE','graduacion1'] , 'L/V/P/50/A', tree.traverseBF);
														

														//Relleno
														tree.add(['Esfera', 'L/V/P/50/A/RE/ES','graduacion2'], 'L/V/P/50/A/RE', tree.traverseBF);

														tree.add(['Cilindro', 'L/V/P/50/A/RE/C','graduacion2'], 'L/V/P/50/A/RE', tree.traverseBF);

														tree.add(['Eje', 'L/V/P/50/A/RE/EJ','graduacion2'], 'L/V/P/50/A/RE' , tree.traverseBF);

														tree.add(['Addición', 'L/V/P/50/A/RE/ADD','graduacion2'], 'L/V/P/50/A/RE' , tree.traverseBF);


										//50
										tree.add(["Hidrófobo", 'L/V/P/50/H', 'tratamiento','Tratamiento hidrófobo',['Este tratamiento repele el agua, polvo, aceite y evita que se adhiera la suciedad.'],'+10€'],'L/V/P/50', tree.traverseBF);
												
												//Hidrofobo
												tree.add(['Ya soy cliente', 'L/V/P/50/H/CL', 'graduacion1'], 'L/V/P/50/H', tree.traverseBF);
											
												tree.add(['Adjunto una imagen con mi graduación', 'L/V/P/50/H/AD', 'graduacion1'], 'L/V/P/50/H', tree.traverseBF);

												tree.add(['Relleno aquí mi graduación', 'L/V/P/50/H/RE','graduacion1'] , 'L/V/P/50/H', tree.traverseBF);
														
														//Relleno
														tree.add(['Esfera', 'L/V/P/50/H/RE/ES','graduacion2'], 'L/V/P/50/H/RE', tree.traverseBF);

														tree.add(['Cilindro', 'L/V/P/50/H/RE/C','graduacion2'], 'L/V/P/50/H/RE', tree.traverseBF);

														tree.add(['Eje', 'L/V/P/50/H/RE/EJ','graduacion2'], 'L/V/P/50/H/RE' , tree.traverseBF);

														tree.add(['Addición', 'L/V/P/50/H/RE/ADD','graduacion2'], 'L/V/P/50/H/RE' , tree.traverseBF);
										//50
										tree.add(["Ninguno", 'L/V/P/50/N', 'tratamiento','Sin tratamientos adicionales',[],''],'L/V/P/50', tree.traverseBF);
												

												//Hidrofobo
												tree.add(['Ya soy cliente', 'L/V/P/50/N/CL', 'graduacion1'], 'L/V/P/50/N', tree.traverseBF);
											
												tree.add(['Adjunto una imagen con mi graduación', 'L/V/P/50/N/AD', 'graduacion1'], 'L/V/P/50/N', tree.traverseBF);

												tree.add(['Relleno aquí mi graduación', 'L/V/P/50/N/RE','graduacion1'] , 'L/V/P/50/N', tree.traverseBF);


														//Relleno
														tree.add(['Esfera', 'L/V/P/50/N/RE/ES','graduacion2'], 'L/V/P/50/N/RE', tree.traverseBF);

														tree.add(['Cilindro', 'L/V/P/50/N/RE/C','graduacion2'], 'L/V/P/50/N/RE', tree.traverseBF);

														tree.add(['Eje', 'L/V/P/50/N/RE/EJ','graduacion2'], 'L/V/P/50/N/RE' , tree.traverseBF);



								//Progresiva
								tree.add(["160", 'L/V/P/60', 'reduccion','Lentes reducidas de índice 1,60 (20% más finas)',['Recomendadas para valores de más de 3 en esfera y/o más de 2 en cilindro','Si tienes más de 3 en cilindro (astigmatismo) escríbenos'], '+50€'], 'L/V/P', tree.traverseBF);
										
										//60
										tree.add(["Azules", 'L/V/P/60/A', 'tratamiento','Bye Blue (Filtro de azules)',['Reduce la transmisión de la luz azul que emiten las pantallas (en el espectro de 380-455 nm) y elimina la fatiga visual ¡Solo recomendadas para interior porque el efecto puede resultar molesto!'],'+20€'],'L/V/P/60', tree.traverseBF);
												
												//Azules
												tree.add(['Ya soy cliente', 'L/V/P/60/A/CL', 'graduacion1'], 'L/V/P/60/A', tree.traverseBF);
											
												tree.add(['Adjunto una imagen con mi graduación', 'L/V/P/60/A/AD', 'graduacion1'], 'L/V/P/60/A', tree.traverseBF);

												tree.add(['Relleno aquí mi graduación', 'L/V/P/60/A/RE','graduacion1'] , 'L/V/P/60/A', tree.traverseBF)
														

														//Relleno
														tree.add(['Esfera', 'L/V/P/60/A/RE/ES','graduacion2'], 'L/V/P/60/A/RE', tree.traverseBF);

														tree.add(['Cilindro', 'L/V/P/60/A/RE/C','graduacion2'], 'L/V/P/60/A/RE', tree.traverseBF);

														tree.add(['Eje', 'L/V/P/60/A/RE/EJ','graduacion2'], 'L/V/P/60/A/RE' , tree.traverseBF);

														tree.add(['Addición', 'L/V/P/60/A/RE/ADD','graduacion2'], 'L/V/P/60/A/RE' , tree.traverseBF);
										
										//60
										tree.add(["Hidrófobo", 'L/V/P/60/H', 'tratamiento','Tratamiento hidrófobo',['Este tratamiento repele el agua, polvo, aceite y evita que se adhiera la suciedad.'],'+10€'],'L/V/P/60', tree.traverseBF);
												
												//Hidrofobo
												tree.add(['Ya soy cliente', 'L/V/P/60/H/CL', 'graduacion1'], 'L/V/P/60/H', tree.traverseBF);
											
												tree.add(['Adjunto una imagen con mi graduación', 'L/V/P/60/H/AD', 'graduacion1'], 'L/V/P/60/H', tree.traverseBF);

												tree.add(['Relleno aquí mi graduación', 'L/V/P/60/H/RE','graduacion1'] , 'L/V/P/60/H', tree.traverseBF);
														
														//Relleno
														tree.add(['Esfera', 'L/V/P/60/H/RE/ES','graduacion2'], 'L/V/P/60/H/RE', tree.traverseBF);

														tree.add(['Cilindro', 'L/V/P/60/H/RE/C','graduacion2'], 'L/V/P/60/H/RE', tree.traverseBF);

														tree.add(['Eje', 'L/V/P/60/H/RE/EJ','graduacion2'], 'L/V/P/60/H/RE' , tree.traverseBF);

														tree.add(['Addición', 'L/V/P/60/H/RE/ADD','graduacion2'], 'L/V/P/60/H/RE' , tree.traverseBF);	
										//60
										tree.add(["Ninguno", 'L/V/P/60/N', 'tratamiento','Sin tratamientos adicionales',[],''],'L/V/P/60', tree.traverseBF);
												

												//Hidrofobo
												tree.add(['Ya soy cliente', 'L/V/P/60/N/CL', 'graduacion1'], 'L/V/P/60/N', tree.traverseBF);
											
												tree.add(['Adjunto una imagen con mi graduación', 'L/V/P/60/N/AD', 'graduacion1'], 'L/V/P/60/N', tree.traverseBF);

												tree.add(['Relleno aquí mi graduación', 'L/V/P/60/N/RE','graduacion1'] , 'L/V/P/60/N', tree.traverseBF);


														//Relleno
														tree.add(['Esfera', 'L/V/P/60/N/RE/ES','graduacion2'], 'L/V/P/60/N/RE', tree.traverseBF);

														tree.add(['Cilindro', 'L/V/P/60/N/RE/C','graduacion2'], 'L/V/P/60/N/RE', tree.traverseBF);

														tree.add(['Eje', 'L/V/P/60/N/RE/EJ','graduacion2'], 'L/V/P/60/N/RE' , tree.traverseBF);

								//Progresiva
								tree.add(["167", 'L/V/P/67', 'reduccion','Lentes reducidas de índice 1,67 (35% más finas)',['Recomendadas para más de 5 (-) en esfera','Si tienes más de 6 en esfera (+) escríbenos'], '+100€'], 'L/V/P', tree.traverseBF);
										
										//67
										tree.add(["Azules", 'L/V/P/67/A', 'tratamiento','Bye Blue (Filtro de azules)',['Reduce la transmisión de la luz azul que emiten las pantallas (en el espectro de 380-455 nm) y elimina la fatiga visual ¡Solo recomendadas para interior porque el efecto puede resultar molesto!'],'+20€'],'L/V/P/67', tree.traverseBF);
												
												//Azules
												tree.add(['Ya soy cliente', 'L/V/P/67/A/CL', 'graduacion1'], 'L/V/P/67/A', tree.traverseBF);
											
												tree.add(['Adjunto una imagen con mi graduación', 'L/V/P/67/A/AD', 'graduacion1'], 'L/V/P/67/A', tree.traverseBF);

												tree.add(['Relleno aquí mi graduación', 'L/V/P/67/A/RE','graduacion1'] , 'L/V/P/67/A', tree.traverseBF);
														
														//Relleno
														tree.add(['Esfera', 'L/V/P/67/A/RE/ES','graduacion2'], 'L/V/P/67/A/RE', tree.traverseBF);

														tree.add(['Cilindro', 'L/V/P/67/A/RE/C','graduacion2'], 'L/V/P/67/A/RE', tree.traverseBF);

														tree.add(['Eje', 'L/V/P/67/A/RE/EJ','graduacion2'], 'L/V/P/67/A/RE' , tree.traverseBF);

														tree.add(['Addición', 'L/V/P/67/A/RE/ADD','graduacion2'], 'L/V/P/67/A/RE' , tree.traverseBF);
										//67
										tree.add(["Hidrófobo", 'L/V/P/67/H', 'tratamiento','Tratamiento hidrófobo',['Este tratamiento repele el agua, polvo, aceite y evita que se adhiera la suciedad.'],'+10€'],'L/V/P/67', tree.traverseBF);
												
												//Hidrofobo
												tree.add(['Ya soy cliente', 'L/V/P/67/H/CL', 'graduacion1'], 'L/V/P/67/H', tree.traverseBF);
											
												tree.add(['Adjunto una imagen con mi graduación', 'L/V/P/67/H/AD', 'graduacion1'], 'L/V/P/67/H', tree.traverseBF);

												tree.add(['Relleno aquí mi graduación', 'L/V/P/67/H/RE','graduacion1'] , 'L/V/P/67/H', tree.traverseBF);
														

														//Relleno
														tree.add(['Esfera', 'L/V/P/67/H/RE/ES','graduacion2'], 'L/V/P/67/H/RE', tree.traverseBF);

														tree.add(['Cilindro', 'L/V/P/67/H/RE/C','graduacion2'], 'L/V/P/67/H/RE', tree.traverseBF);

														tree.add(['Eje', 'L/V/P/67/H/RE/EJ','graduacion2'], 'L/V/P/67/H/RE' , tree.traverseBF);

														tree.add(['Addición', 'L/V/P/67/H/RE/ADD','graduacion2'], 'L/V/P/67/H/RE' , tree.traverseBF);
										
										tree.add(["Ninguno", 'L/V/P/67/N', 'tratamiento','Sin tratamientos adicionales',[],''],'L/V/P/67', tree.traverseBF);
												

												//Hidrofobo
												tree.add(['Ya soy cliente', 'L/V/P/67/N/CL', 'graduacion1'], 'L/V/P/67/N', tree.traverseBF);
											
												tree.add(['Adjunto una imagen con mi graduación', 'L/V/P/67/N/AD', 'graduacion1'], 'L/V/P/67/N', tree.traverseBF);

												tree.add(['Relleno aquí mi graduación', 'L/V/P/67/N/RE','graduacion1'] , 'L/V/P/67/N', tree.traverseBF);


														//Relleno
														tree.add(['Esfera', 'L/V/P/67/N/RE/ES','graduacion2'], 'L/V/P/67/N/RE', tree.traverseBF);

														tree.add(['Cilindro', 'L/V/P/67/N/RE/C','graduacion2'], 'L/V/P/67/N/RE', tree.traverseBF);

														tree.add(['Eje', 'L/V/P/67/N/RE/EJ','graduacion2'], 'L/V/P/67/N/RE' , tree.traverseBF);


						//Vista
						tree.add(['Solo_Montura', 'L/V/SM','foco','Solo Montura',[],'+0€'], 'L/V', tree.traverseBF);

								//Neutra
								tree.add(['Hide','L/V/SM/Hi','reduccion','Hide',[],''],'L/V/SM',tree.traverseBF);

									//Neutra
									tree.add(['Hide','L/V/SM/Hi/Hi','tratamiento','Hide',[],''],'L/V/SM/Hi',tree.traverseBF);


  /*********************  Barrera entre Vista y Sol ****************************************************************************/

				//Lente
				tree.add(['Sol', 'L/S', 'gafa','sol',[],''], 'L', tree.traverseBF);
						
						
						//SOL
						tree.add(['Neutra', 'L/S/N', 'foco','Gafas sin graduar',['Lentes de material orgánico CR39 con filtro categoría 3 (protección UV 400)','Entrega 1-2 días laborables'],'+0€'], 'L/S', tree.traverseBF);
								
								//Neutra
								tree.add(['Hide','L/S/N/Hi','reduccion','Hide',[],''],'L/S/N',tree.traverseBF);

									//Hide
									tree.add(['Ninguno','L/S/N/Hi/N', 'tratamiento','Sin tratamientos adicionales',[],''], 'L/S/N/Hi' , tree.traverseBF);
									
									tree.add(['Polarizada','L/S/N/Hi/P', 'tratamiento','Lentes sin graduar polarizadas',['Filtro categoría 3 (protección UV 400, recomendadas para esquiar o en el mar'],'+20€'], 'L/S/N/Hi' , tree.traverseBF);




						//Sol
						tree.add(['Monofocal','L/S/M', 'foco','Gafas con lentes monofocales',['Solo para cerca o lejos','Entrega 10-15 días laborables'],'+0€'], 'L/S' , tree.traverseBF);
								
								//Monofocal
								tree.add(["150", 'L/S/M/50', 'reduccion','Lentes sin reducción',['Máximo 2 dioptrías de esfera y 2 de cilindro'],'incluido'],'L/S/M', tree.traverseBF);

										//50
										tree.add(['Polarizada','L/S/M/50/P', 'tratamiento','Lentes graduadas polarizadas',['Filtro categoría 3 (protección UV 400, recomendadas para esquiar o en el mar'],'+50€'], 'L/S/M/50' , tree.traverseBF);
												
												//Polarizada
												tree.add(['Ya soy cliente', 'L/S/M/50/P/CL', 'graduacion1'], 'L/S/M/50/P', tree.traverseBF);
											
												tree.add(['Adjunto una imagen con mi graduación', 'L/S/M/50/P/AD', 'graduacion1'], 'L/S/M/50/P', tree.traverseBF);

												tree.add(['Relleno aquí mi graduación', 'L/S/M/50/P/RE','graduacion1'] , 'L/S/M/50/P', tree.traverseBF);

														//Relleno
														tree.add(['Esfera', 'L/S/M/50/P/RE/ES','graduacion2'], 'L/S/M/50/P/RE', tree.traverseBF);

														tree.add(['Cilindro', 'L/S/M/50/P/RE/C','graduacion2'], 'L/S/M/50/P/RE', tree.traverseBF);

														tree.add(['Eje', 'L/S/M/50/P/RE/EJ','graduacion2'], 'L/S/M/50/P/RE' , tree.traverseBF);

										//50
										tree.add(['Ninguno','L/S/M/50/N', 'tratamiento','Sin tratamientos adicionales',[],''], 'L/S/M/50' , tree.traverseBF);
												
												//Polarizada
												tree.add(['Ya soy cliente', 'L/S/M/50/N/CL', 'graduacion1'], 'L/S/M/50/N', tree.traverseBF);
											
												tree.add(['Adjunto una imagen con mi graduación', 'L/S/M/50/N/AD', 'graduacion1'], 'L/S/M/50/N', tree.traverseBF);

												tree.add(['Relleno aquí mi graduación', 'L/S/M/50/N/RE','graduacion1'] , 'L/S/M/50/N', tree.traverseBF);

														//Relleno
														tree.add(['Esfera', 'L/S/M/50/N/RE/ES','graduacion2'], 'L/S/M/50/N/RE', tree.traverseBF);

														tree.add(['Cilindro', 'L/S/M/50/N/RE/C','graduacion2'], 'L/S/M/50/N/RE', tree.traverseBF);

														tree.add(['Eje', 'L/S/M/50/N/RE/EJ','graduacion2'], 'L/S/M/50/N/RE' , tree.traverseBF);


								//Monofocal
								tree.add(["160", 'L/S/M/60', 'reduccion','Lentes reducidas de índice 1,60 (20% más finas)',['Recomendadas entre 3 y 6 dioptrías y/o más de 2 en cilindro','Si tienes más de 3 en cilindro (astigmatismo) escríbenos'], '+40€'], 'L/S/M', tree.traverseBF);

										//60
										tree.add(['Polarizada','L/S/M/60/P', 'tratamiento','Lentes graduadas polarizadas',['Filtro categoría 3 (protección UV 400, recomendadas para esquiar o en el mar'],'+50€'], 'L/S/M/60' , tree.traverseBF)
											;
												//Polarizada
												tree.add(['Ya soy cliente', 'L/S/M/60/P/CL', 'graduacion1'], 'L/S/M/60/P', tree.traverseBF);
											
												tree.add(['Adjunto una imagen con mi graduación', 'L/S/M/60/P/AD', 'graduacion1'], 'L/S/M/60/P', tree.traverseBF);

												tree.add(['Relleno aquí mi graduación', 'L/S/M/60/P/RE','graduacion1'] , 'L/S/M/60/P', tree.traverseBF);
														
														//Relleno
														tree.add(['Esfera', 'L/S/M/60/P/RE/ES','graduacion2'], 'L/S/M/60/P/RE', tree.traverseBF);

														tree.add(['Cilindro', 'L/S/M/60/P/RE/C','graduacion2'], 'L/S/M/60/P/RE', tree.traverseBF);

														tree.add(['Eje', 'L/S/M/60/P/RE/EJ','graduacion2'], 'L/S/M/60/P/RE' , tree.traverseBF);
										//60
										tree.add(['Ninguno','L/S/M/60/N', 'tratamiento','Sin tratamientos adicionales',[],''], 'L/S/M/60' , tree.traverseBF);
												
												//Polarizada
												tree.add(['Ya soy cliente', 'L/S/M/60/N/CL', 'graduacion1'], 'L/S/M/60/N', tree.traverseBF);
											
												tree.add(['Adjunto una imagen con mi graduación', 'L/S/M/60/N/AD', 'graduacion1'], 'L/S/M/60/N', tree.traverseBF);

												tree.add(['Relleno aquí mi graduación', 'L/S/M/60/N/RE','graduacion1'] , 'L/S/M/60/N', tree.traverseBF);

														//Relleno
														tree.add(['Esfera', 'L/S/M/60/N/RE/ES','graduacion2'], 'L/S/M/60/N/RE', tree.traverseBF);

														tree.add(['Cilindro', 'L/S/M/60/N/RE/C','graduacion2'], 'L/S/M/60/N/RE', tree.traverseBF);

														tree.add(['Eje', 'L/S/M/60/N/RE/EJ','graduacion2'], 'L/S/M/60/N/RE' , tree.traverseBF);
								
								//Monofocal
								tree.add(["167", 'L/S/M/67', 'reduccion','Lentes reducidas de índice 1,67 (35% más finas)',['Recomendadas para más de 5 (-) en esfera','Si tienes más de 6 en esfera (+) y/o mas de 2 en cilindro escríbenos'], '+80€'], 'L/S/M', tree.traverseBF);

										//67
										tree.add(['Polarizada','L/S/M/67/P', 'tratamiento','Lentes graduadas polarizadas',['Filtro categoría 3 (protección UV 400, recomendadas para esquiar o en el mar'],'+50€'], 'L/S/M/67' , tree.traverseBF);
												
												//Polarizada
												tree.add(['Ya soy cliente', 'L/S/M/67/P/CL', 'graduacion1'], 'L/S/M/67/P', tree.traverseBF);
											
												tree.add(['Adjunto una imagen con mi graduación', 'L/S/M/67/P/AD', 'graduacion1'], 'L/S/M/67/P', tree.traverseBF);

												tree.add(['Relleno aquí mi graduación', 'L/S/M/67/P/RE','graduacion1'] , 'L/S/M/67/P', tree.traverseBF);
														

														//Relleno
														tree.add(['Esfera', 'L/S/M/67/P/RE/ES','graduacion2'], 'L/S/M/67/P/RE', tree.traverseBF);

														tree.add(['Cilindro', 'L/S/M/67/P/RE/C','graduacion2'], 'L/S/M/67/P/RE', tree.traverseBF);

														tree.add(['Eje', 'L/S/M/67/P/RE/EJ','graduacion2'], 'L/S/M/67/P/RE' , tree.traverseBF);
										//67
										tree.add( ['Ninguno','L/S/M/67/N', 'tratamiento','Sin tratamientos adicionales',[],''], 'L/S/M/67' , tree.traverseBF);
												
												//Polarizada
												tree.add(['Ya soy cliente', 'L/S/M/67/N/CL', 'graduacion1'], 'L/S/M/67/N', tree.traverseBF);
											
												tree.add(['Adjunto una imagen con mi graduación', 'L/S/M/67/N/AD', 'graduacion1'], 'L/S/M/67/N', tree.traverseBF);

												tree.add(['Relleno aquí mi graduación', 'L/S/M/67/N/RE','graduacion1'] , 'L/S/M/67/N', tree.traverseBF);

														//Relleno
														tree.add(['Esfera', 'L/S/M/67/N/RE/ES','graduacion2'], 'L/S/M/67/N/RE', tree.traverseBF);

														tree.add(['Cilindro', 'L/S/M/67/N/RE/C','graduacion2'], 'L/S/M/67/N/RE', tree.traverseBF);

														tree.add(['Eje', 'L/S/M/67/N/RE/EJ','graduacion2'], 'L/S/M/67/N/RE' , tree.traverseBF);
								
						//SOL
						tree.add(['Progresiva', 'L/S/P', 'foco', 'Gafas progresivas',['Para lejos, cerca y distancia intermedia', 'Entrega 10-15 días laborables'],'+140€'], 'L/S' , tree.traverseBF);
								
								//Progresiva
								tree.add(["150", 'L/S/P/50', 'reduccion','Lentes sin reducción',['Máximo 2 dioptrías de esfera y 2 de cilindro'],'incluido'],'L/S/P', tree.traverseBF);

										//50
										tree.add(['Polarizada','L/S/P/50/P', 'tratamiento','Lentes graduadas polarizadas',['Filtro categoría 3 (protección UV 400, recomendadas para esquiar o en el mar'],'+50€'], 'L/S/P/50' , tree.traverseBF);
										
											//polarizada
											tree.add(['Ya soy cliente', 'L/S/P/50/P/CL', 'graduacion1'], 'L/S/P/50/P', tree.traverseBF);
											
											tree.add(['Adjunto una imagen con mi graduación', 'L/S/P/50/P/AD', 'graduacion1'], 'L/S/P/50/P', tree.traverseBF);

											tree.add(['Relleno aquí mi graduación', 'L/S/P/50/P/RE','graduacion1'] , 'L/S/P/50/P', tree.traverseBF);
														
														//Relleno
														tree.add(['Esfera', 'L/S/P/50/P/RE/ES','graduacion2'], 'L/S/P/50/P/RE', tree.traverseBF);

														tree.add(['Cilindro', 'L/S/P/50/P/RE/C','graduacion2'], 'L/S/P/50/P/RE', tree.traverseBF);

														tree.add(['Eje', 'L/S/P/50/P/RE/EJ','graduacion2'], 'L/S/P/50/P/RE' , tree.traverseBF);

														tree.add(['Addición', 'L/S/P/50/P/RE/ADD','graduacion2'], 'L/S/P/50/P/RE' , tree.traverseBF);
										//50
										tree.add(['Ninguno','L/S/P/50/N', 'tratamiento','Sin tratamientos adicionales',[],''], 'L/S/P/50' , tree.traverseBF);
												
												//Polarizada
												tree.add(['Ya soy cliente', 'L/S/P/50/N/CL', 'graduacion1'], 'L/S/P/50/N', tree.traverseBF);
											
												tree.add(['Adjunto una imagen con mi graduación', 'L/S/P/50/N/AD', 'graduacion1'], 'L/S/P/50/N', tree.traverseBF);

												tree.add(['Relleno aquí mi graduación', 'L/S/P/50/N/RE','graduacion1'] , 'L/S/P/50/N', tree.traverseBF);

														//Relleno
														tree.add(['Esfera', 'L/S/P/50/N/RE/ES','graduacion2'], 'L/S/P/50/N/RE', tree.traverseBF);

														tree.add(['Cilindro', 'L/S/P/50/N/RE/C','graduacion2'], 'L/S/P/50/N/RE', tree.traverseBF);

														tree.add(['Eje', 'L/S/P/50/N/RE/EJ','graduacion2'], 'L/S/P/50/N/RE' , tree.traverseBF);
								//Progresiva
								tree.add(["160", 'L/S/P/60', 'reduccion','Lentes reducidas de índice 1,60 (20% más finas)',['Recomendadas para valores de más de 3 en esfera y/o más de 2 en cilindro'], '+50€'], 'L/S/P', tree.traverseBF);
										
										//60
										tree.add(['Polarizada','L/S/P/60/P', 'tratamiento','Lentes graduadas polarizadas',['Filtro categoría 3 (protección UV 400, recomendadas para esquiar o en el mar'],'+50€'], 'L/S/P/60' , tree.traverseBF);	
											
												//Polarizada
												tree.add(['Ya soy cliente', 'L/S/P/60/P/CL', 'graduacion1'], 'L/S/P/60/P', tree.traverseBF);
											
												tree.add(['Adjunto una imagen con mi graduación', 'L/S/P/60/P/AD', 'graduacion1'], 'L/S/P/60/P', tree.traverseBF);
												
												tree.add(['Relleno aquí mi graduación', 'L/S/P/60/P/RE','graduacion1'] , 'L/S/P/60/P', tree.traverseBF);
														
														//Relleno
														tree.add(['Esfera', 'L/S/P/60/P/RE/ES','graduacion2'], 'L/S/P/60/P/RE', tree.traverseBF);

														tree.add(['Cilindro', 'L/S/P/60/P/RE/C','graduacion2'], 'L/S/P/60/P/RE', tree.traverseBF);

														tree.add(['Eje', 'L/S/P/60/P/RE/EJ','graduacion2'], 'L/S/P/60/P/RE' , tree.traverseBF);

														tree.add(['Addición', 'L/S/P/60/P/RE/ADD','graduacion2'], 'L/S/P/60/P/RE' , tree.traverseBF);
										//60
										tree.add(['Ninguno','L/S/P/60/N', 'tratamiento','Sin tratamientos adicionales',[],''], 'L/S/P/60' , tree.traverseBF);
												
												//Polarizada
												tree.add(['Ya soy cliente', 'L/S/P/60/N/CL', 'graduacion1'], 'L/S/P/60/N', tree.traverseBF);
											
												tree.add(['Adjunto una imagen con mi graduación', 'L/S/P/60/N/AD', 'graduacion1'], 'L/S/P/60/N', tree.traverseBF);

												tree.add(['Relleno aquí mi graduación', 'L/S/P/60/N/RE','graduacion1'] , 'L/S/P/60/N', tree.traverseBF);

														//Relleno
														tree.add(['Esfera', 'L/S/P/60/N/RE/ES','graduacion2'], 'L/S/P/60/N/RE', tree.traverseBF);

														tree.add(['Cilindro', 'L/S/P/60/N/RE/C','graduacion2'], 'L/S/P/60/N/RE', tree.traverseBF);

														tree.add(['Eje', 'L/S/P/60/N/RE/EJ','graduacion2'], 'L/S/P/60/N/RE' , tree.traverseBF);

								//Progresiva
								tree.add(["167", 'L/S/P/67', 'reduccion','Lentes reducidas de índice 1,67 (35% más finas)',['Recomendadas para más de 5 en esfera'], '+100€'], 'L/S/P', tree.traverseBF);
										//67
										tree.add(['Polarizada','L/S/P/67/P', 'tratamiento','Lentes graduadas polarizadas',['Filtro categoría 3 (protección UV 400, recomendadas para esquiar o en el mar'],'+50€'], 'L/S/P/67' , tree.traverseBF);
											
											//Polarizada
											tree.add(['Ya soy cliente', 'L/S/P/67/P/CL', 'graduacion1'], 'L/S/P/67/P', tree.traverseBF);
											
											tree.add(['Adjunto una imagen con mi graduación', 'L/S/P/67/P/AD', 'graduacion1'], 'L/S/P/67/P', tree.traverseBF);

											tree.add(['Relleno aquí mi graduación', 'L/S/P/67/P/RE','graduacion1'] , 'L/S/P/67/P', tree.traverseBF);
														
														//Relleno
														tree.add(['Esfera', 'L/S/P/67/P/RE/ES','graduacion2'], 'L/S/P/67/P/RE', tree.traverseBF);

														tree.add(['Cilindro', 'L/S/P/67/P/RE/C','graduacion2'], 'L/S/P/67/P/RE', tree.traverseBF);

														tree.add(['Eje', 'L/S/P/67/P/RE/EJ','graduacion2'], 'L/S/P/67/P/RE' , tree.traverseBF);

														tree.add(['Addición', 'L/S/P/67/P/RE/ADD','graduacion2'], 'L/S/P/67/P/RE' , tree.traverseBF);
										//67
										tree.add(['Ninguno','L/S/P/67/N', 'tratamiento','Sin tratamientos adicionales',[],''], 'L/S/P/67' , tree.traverseBF);
												
												//Polarizada
												tree.add(['Ya soy cliente', 'L/S/P/67/N/CL', 'graduacion1'], 'L/S/P/67/N', tree.traverseBF);
											
												tree.add(['Adjunto una imagen con mi graduación', 'L/S/P/67/N/AD', 'graduacion1'], 'L/S/P/67/N', tree.traverseBF);

												tree.add(['Relleno aquí mi graduación', 'L/S/P/67/N/RE','graduacion1'] , 'L/S/P/67/N', tree.traverseBF);

														//Relleno
														tree.add(['Esfera', 'L/S/P/67/N/RE/ES','graduacion2'], 'L/S/P/67/N/RE', tree.traverseBF);

														tree.add(['Cilindro', 'L/S/P/67/N/RE/C','graduacion2'], 'L/S/P/67/N/RE', tree.traverseBF);

														tree.add(['Eje', 'L/S/P/67/N/RE/EJ','graduacion2'], 'L/S/P/67/N/RE' , tree.traverseBF);


						//SOL
						tree.add(['Solo_Montura', 'L/S/SM','foco','SoloMontura',[],'+0€'], 'L/S', tree.traverseBF);

								//Solo Montura
								tree.add(['Hide','L/S/SM/Hi','reduccion','Hide',[],''],'L/S/SM',tree.traverseBF);

									//Hide
									tree.add(['Hide','L/S/SM/Hi/Hi','tratamiento','Hide',[],''],'L/S/SM/Hi',tree.traverseBF);


				
			    //Lente
				tree.add(['Azules','L/A','gafa','azules',[],''], 'L', tree.traverseBF);

}
	
//Pretty print function Call
		
function prettyPrint(tree){

		tree.traverseDF(function(node) {
					tab = "";
					for(var i =0; i<node.level; i++){
						if(i == node.level -1){
							tab += "|-";
						}else{
							tab += "\t"; 
						}
					}
					console.log(tab + node.name);
				});

}







		
		