<?php

namespace App\Service;

use App\Entity\Cart;
use App\Repository\CartRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

class SessionCartService
{
    private SessionInterface $session;
    private CartRepository $cartRepository;
    private EntityManagerInterface $em;

    public function __construct(RequestStack $requestStack, CartRepository $cartRepository, EntityManagerInterface $em) {
        $this->session = $requestStack->getCurrentRequest()->getSession();
        $this->cartRepository = $cartRepository;
        $this->em = $em;
    }

    /**
     * Get the current user cart from session.
     * @return Cart
     */
    public function getCart(): Cart
    {
        $cartId = $this->session->get('cart_id');

        // Si un cart n'existe pas encore, alors on le crée.
        if(!$cartId) {
            $cart = new Cart();
            // Ensuite on le persiste.
            $this->em->persist($cart);
            $this->em->flush();
            // Et enfin on stocke son id en session.
            $this->setCartID($cart);
        }
        else {
            $cart = $this->cartRepository->find($cartId);
        }

        return $cart;
    }


    /**
     * Set the session Cart.
     * @param Cart $cart
     * @return void
     */
    public function setCartID(Cart $cart): void
    {
        $this->session->set('cart_id', $cart->getId());
    }


    /**
     * Delete cart from session.
     * @return void
     */
    public function deleteSessionCart(): void
    {
        $cart = $this->getCart();
        $this->em->remove($cart);
        $this->em->flush();
        $this->session->remove('cart_id');
    }
}